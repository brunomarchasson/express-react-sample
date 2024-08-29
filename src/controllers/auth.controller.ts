import { Request, Response } from 'express';
import ms from 'ms';
import { AppDataSource } from '../data-source';
import { User } from '../entity/User.entity';
import { encrypt } from '../helpers/encrypt';
import env from '../env';

export const AUTH_COOKIE_NAME = 'authcookie';
export class AuthController {
  static getToken(user: User): string {
    return encrypt.generateToken({
      id: user.id,
    });
  }
  static sendUserCookie(res: Response, token: string) {
    console.log('maxAge', ms(env.SESSION_EXPIRES));
    res.cookie(AUTH_COOKIE_NAME, token, {
      maxAge: ms(env.SESSION_EXPIRES as string),
      httpOnly: true,
    });
  }
  static async renew(req: Request, res: Response) {
    console.log('renew', req.context?.currentUser);
    const userRepository = AppDataSource.getRepository(User);
    const user = await userRepository.findOne({
      where: { id: req?.context?.currentUser?.id },
    });
    if (!user) {
      return res.status(404).json({ message: 'Unauthorized' });
    }
    const token = await AuthController.getToken(user);
    AuthController.sendUserCookie(res, token);
    return res.status(200).json({ message: 'Login successful', user, token });
  }
  static async logout(req: Request, res: Response) {
    res.clearCookie(AUTH_COOKIE_NAME);
    res.end();
  }

  static async login(req: Request, res: Response) {
    try {
      const { email, password } = req.body;
      if (!email || !password) {
        return res
          .status(500)
          .json({ message: ' email and password required' });
      }

      const userRepository = AppDataSource.getRepository(User);
      const user = await userRepository.findOne({ where: { email } });
      const isPasswordValid = await encrypt.comparepassword(
        user?.password ?? '',
        password,
      );
      console.log('isPasswordValid', isPasswordValid);
      if (!user || !isPasswordValid) {
        return res.status(404).json({ message: 'User not found' });
      }
      const token = await AuthController.getToken(user);
      AuthController.sendUserCookie(res, token);
      return res.status(200).json({ message: 'Login successful', user, token });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  }
}
