import express, { Request, Response } from 'express';
import { DataSource, ObjectLiteral, EntityTarget } from 'typeorm';
import { AUTH_COOKIE_NAME, authControler } from './auth.controler';
import { NextFunction } from 'express';
import env from '../../env';
import jwt from 'jsonwebtoken';
import { JWTpayload } from './types';

declare global {
  namespace Express {
    interface Request {
      context?: {
        currentUser: JWTpayload;
      };
    }
  }
}

interface authOption<T extends EntityTarget<ObjectLiteral>> {
  resetUrl: string;
  dataSource: DataSource;
  entity: T;
}
export function authService<T extends EntityTarget<ObjectLiteral>>(
  options: authOption<T>,
) {
  const Router = express.Router();
  const repository = options.dataSource.getRepository(options.entity);
  const controler = authControler({
    repository,
    resetUrl: options.resetUrl,
  });
  Router.get('/test', async (req: Request, res: Response) => {
    const r = await repository.find();
    res.status(200).json(r);
  });
  Router.get('/login', authentification, controler.renew);
  Router.post('/login', controler.login);
  Router.post('/logout', controler.logout);
  Router.post('/signup', controler.signup);
  Router.post('/forgot', controler.forgotPassword);
  Router.post('/reset', controler.resetPassword);

  return Router;
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
