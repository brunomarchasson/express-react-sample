export interface ApiError extends Error {
  name: 'ApiArror';
  clientMessage: string;
  statusCode: number;
}

export function apiError(statusCode: number, clientMsg: string, msg?: string) {
  const error = new Error(msg) as ApiError;
  error.name = 'ApiArror';
  error.statusCode = statusCode;
  error.message = msg ?? clientMsg;
  error.clientMessage = clientMsg;
  return error;
}

export function isApiError(error: Error): error is ApiError {
  return error.name === 'ApiArror';
}
