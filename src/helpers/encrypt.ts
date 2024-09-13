import jwt, { SignOptions } from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import env from '../env';
import { JWTpayload } from '../typings/types';

const saltRounds = 12;

export class encrypt {
  static async encryptpass(password: string) {
    return bcrypt.hash(password, saltRounds);
  }

  static async comparepassword(hashPassword: string, password: string) {
    return bcrypt.compare(password, hashPassword);
  }

  static generateToken(payload: JWTpayload, opts: SignOptions = {}) {
    return jwt.sign(payload, env.JWT_SECRET, {
      expiresIn: env.SESSION_EXPIRES,
      ...opts,
    });
  }
}
