import { NextFunction } from 'express';
import { Request, Response } from 'express';

export const errorHandler = (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  console.error(`Error: ${error.message}`);
  if (res.headersSent) {
    return next(error);
  }
  return res.status(500).json({ message: 'Internal server error' });
};
