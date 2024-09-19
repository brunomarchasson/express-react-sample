import { Request, Response, NextFunction } from 'express';
import logger from '../services/Log/logger.service';
import { errorResponse } from '../services/open-api/api.utils';
import env from '../env';

interface CustomError extends Error {
  status?: number;
  message: string;
}

export const errorHandler = (
  err: CustomError,
  _: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  __: NextFunction,
): void => {
  const statusCode = err.status || 500;
  const errorMessage = err.message || 'Internal Server Error';

  logger.error(`${statusCode}: ${errorMessage}`);

  return errorResponse(
    res,
    errorMessage,
    statusCode,
    err,
    env.APP_ENV === 'dev' && err.stack,
  );
};

export default errorHandler;
