import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import { ZodError, ZodSchema } from 'zod';
import { errorResponse } from '../api.utils';

export type RequestZodSchemaType = {
  params?: ZodSchema;
  query?: ZodSchema;
  body?: ZodSchema;
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const sanitizeRecord = <T extends Record<any, any>>(record: T): T => {
  try {
    return Object.fromEntries(
      Object.entries(record).filter(
        ([, value]) => value !== null && value !== undefined,
      ),
    ) as T;
  } catch {
    return record;
  }
};

export const inputValidator =
  (payload: RequestZodSchemaType) =>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (req: Request<any, any, any, any>, res: Response, next?: NextFunction) => {
    let error: ZodError | null = null;

    Object.entries(payload)
      .filter(([k]) => k !== 'response')
      .forEach((prop) => {
        const [key, value] = prop as [keyof RequestZodSchemaType, ZodSchema];

        const parsed = value.safeParse(req[key]);

        if (!parsed.success) {
          if (error instanceof ZodError) {
            error.addIssues(parsed.error.issues);
          } else {
            error = parsed.error;
          }
        }

        req[key] = sanitizeRecord(parsed.data);
      });

    if (error) {
      return errorResponse(
        res,
        'Invalid input',
        StatusCodes.BAD_REQUEST,
        error,
      );
    } else {
      next?.();
    }
  };
