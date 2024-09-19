import { JWTPayload } from '../../modules/auth/auth.utils';

export {};

declare global {
  namespace Express {
    export interface Request {
      context?: {
        currentUser: JWTPayload;
      };
    }
  }
}
