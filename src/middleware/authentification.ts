import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { AUTH_COOKIE_NAME } from '../controllers/auth.controller';
import env from '../env';
import { JWTpayload } from '../typings/types';

declare global {
  namespace Express {
    interface Request {
      context?: {
        currentUser: JWTpayload;
      };
    }
  }
}
export const authentification = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const header = req.headers.authorization;
  const cookie = req.cookies[AUTH_COOKIE_NAME];

  if (!header && !cookie) {
    return res.status(401).json({ message: 'Unauthorized' });
  }
  const token = cookie ?? (header && header.split(' ')[1]);
  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }
  const decode = jwt.verify(token, env.JWT_SECRET);
  if (!decode) {
    return res.status(401).json({ message: 'Unauthorized' });
  }
  req.context = { ...(req.context ?? {}), currentUser: decode as JWTpayload };
  return next();
};
