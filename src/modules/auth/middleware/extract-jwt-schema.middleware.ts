import { NextFunction, Request, Response } from 'express';
import { JWTPayload, verifyToken } from '../auth.utils';
import { AUTH_COOKIE_KEY } from '../auth.constants';

export const extractJwt = async (
  req: Request,
  _: Response,
  next: NextFunction,
) => {
  try {
    const token =
      req.cookies?.[AUTH_COOKIE_KEY] ??
      req.headers['authorization']?.split(' ')[1];
    if (!token) {
      return next();
    }
    const decode: JWTPayload = (await verifyToken<JWTPayload>(
      token,
    )) as JWTPayload;
    req.context = { ...(req.context ?? {}), currentUser: decode as JWTPayload };

    return next();
  } catch {
    return next();
  }
};
