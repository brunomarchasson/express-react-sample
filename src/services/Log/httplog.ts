import { NextFunction, Request, Response } from 'express';
import {
  HTTPHeaders,
  HTTPMethods,
  SensitiveKeys,
  SpecialMessages,
  SuccessMessages,
} from './enums';
import { httpLogger } from '.';

export interface IHTTPLoggerResponseData {
  request: IHTTPLoggerRequest;
  response: IHTTPLoggerResponse;
}

interface IHTTPLoggerRequest {
  headers: Record<string, unknown>;
  host?: string;
  baseUrl: string;
  url: string;
  method: string;
  body: unknown;
  params: Record<string, unknown>;
  query: Record<string, unknown>;
  clientIp?: string | string[];
}

interface IHTTPLoggerResponse {
  headers: Record<string, unknown>;
  statusCode: number;
  requestDuration: string;
  body: unknown;
}

// This middleware is called before sending response to the client
// It is used as a central place for logging and formatting response messages
export const httpLogs = (
  req: Request,
  res: Response,
  next: NextFunction,
): void => {
  // used to calculate time between request and the response
  const requestStartTime = Date.now();

  // Save the original response method
  const originalSend = res.send;

  // Create a flag to track whether the response has been sent
  let responseSent = false;

  // Override the response method
  res.send = function (body: unknown): Response {
    // Log the response body or any other data you want to track
    // responseSent is used to block the same request from being sent twice
    if (!responseSent) {
      if (res.statusCode < 400) {
        httpLogger.info(
          getResponseMessage(req.method),
          formatHTTPLoggerResponse(req, res, body, requestStartTime),
        );
      } else {
        httpLogger.error(
          (body as { message?: string })?.message || 'Error',
          formatHTTPLoggerResponse(req, res, body, requestStartTime),
        );
      }

      responseSent = true;
    }

    // Call the original response method
    return originalSend.call(this, body);
  };

  // Continue processing the request
  next();
};

function getResponseMessage(responseMethod: HTTPMethods | string): string {
  switch (responseMethod) {
    case HTTPMethods.POST:
      return SuccessMessages.CreateSuccess;
    case HTTPMethods.GET:
      return SuccessMessages.GetSuccess;
    case HTTPMethods.PUT:
    case HTTPMethods.PATCH:
      return SuccessMessages.UpdateSuccess;
    case HTTPMethods.DELETE:
      return SuccessMessages.DeleteSuccess;
    default:
      return SuccessMessages.GenericSuccess;
  }
}

const formatHTTPLoggerResponse = (
  req: Request,
  res: Response,
  responseBody: unknown,
  requestStartTime?: number,
): IHTTPLoggerResponseData => {
  let requestDuration = '.';

  if (requestStartTime) {
    const endTime = Date.now() - requestStartTime;
    requestDuration = `${endTime / 1000}s`; // ms to s
  }

  return {
    request: {
      headers: req.headers as Record<string, unknown>,
      host: req.headers.host,
      baseUrl: req.baseUrl,
      url: req.url,
      method: req.method,
      body: req.body,
      params: req.params as Record<string, unknown>,
      query: req.query as Record<string, unknown>,
      clientIp:
        req.headers[HTTPHeaders.ForwardedFor] ?? req.socket.remoteAddress,
    },
    response: {
      headers: res.getHeaders(),
      statusCode: res.statusCode,
      requestDuration,
      body: redactLogData(responseBody),
    },
  };
};

const sensitiveKeysList = Object.values(SensitiveKeys) as string[];

// Used to obscure sensitive information from logs, such as passwords
const redactLogData = (data: unknown): unknown => {
  // to avoid calling redact function on native Mongoose/MongoDB model
  // we check if !data.constructor.name.startsWith('model')

  if (
    typeof data === 'object' &&
    data !== null &&
    !data.constructor.name.startsWith('model')
  ) {
    if (Array.isArray(data)) {
      return data.map((item) => redactLogData(item));
    }

    const redactedData: { [key: string]: unknown } = {};

    for (const key in data) {
      if (sensitiveKeysList.includes(key)) {
        redactedData[key] = SpecialMessages.Redacted;
      } else {
        // Recursively redact sensitive keys within nested objects
        redactedData[key] = redactLogData(
          (data as Record<string, unknown>)[key],
        );
      }
    }

    return redactedData;
  } else {
    return data;
  }
};
