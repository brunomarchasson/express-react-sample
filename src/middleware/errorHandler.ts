import { Request, Response, NextFunction } from 'express';
import logger from '../services/Log/logger.service';
// import { errorResponse } from '../services/open-api/api.utils';
import env from '../env';
import { ApiError } from '../comon/error';

export const errorHandler = (
  err: ApiError,
  _: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  __: NextFunction,
): void => {
  console.log('sdfsdfsdfsfdsf');
  const statusCode = err.statusCode || 500;
  const errorMessage = err.clientMessage ?? 'Internal Server Error';

  logger.error(`${statusCode}: ${errorMessage}`);
  res.status(statusCode).json({
    success: false,
    clientMessage: err.clientMessage ?? 'error',
    message: err.message,
    // data: err,
    stack: env.APP_ENV === 'dev' && err.stack,
  });

  // return errorResponse(
  //   res,
  //   errorMessage,
  //   statusCode,
  //   err,
  //   env.APP_ENV === 'dev' && err.stack,
  // );
};

export default errorHandler;
