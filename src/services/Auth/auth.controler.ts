import { Request, Response } from 'express';
import { Repository, ObjectLiteral } from 'typeorm';

import ms from 'ms';
import { encrypt } from '../../helpers/encrypt';
import env from '../../env';

interface authControlerOptions {
  repository: Repository<ObjectLiteral>;
}

export const AUTH_COOKIE_NAME = 'authcookie';

export function authControler({ repository }: authControlerOptions) {
  function getToken(user: ObjectLiteral): string {
    return encrypt.generateToken({
      id: user.id,
    });
  }
  function sendUserCookie(res: Response, token: string) {
    console.log('maxAge', ms(env.SESSION_EXPIRES));
    res.cookie(AUTH_COOKIE_NAME, token, {
      maxAge: ms(env.SESSION_EXPIRES as string),
      httpOnly: true,
    });
  }
  async function renew(req: Request, res: Response) {
    console.log('renew', req.context?.currentUser);

    const user = await repository.findOne({
      where: { id: req?.context?.currentUser?.id },
    });

    if (!user) {
      return res.status(404).json({ message: 'Unauthorized' });
    }
    const token = await getToken(user);
    sendUserCookie(res, token);
    return res.status(200).json({ message: 'Login successful', user, token });
  }
  async function logout(req: Request, res: Response) {
    res.clearCookie(AUTH_COOKIE_NAME);
    res.end();
  }

  async function login(req: Request, res: Response) {
    try {
      console.log('ss');
      const { email, password } = req.body;
      if (!email || !password) {
        return res
          .status(500)
          .json({ message: ' email and password required' });
      }

      const user = await repository.findOne({ where: { email } });
      const isPasswordValid = await encrypt.comparepassword(
        user?.password ?? '',
        password,
      );
      console.log('isPasswordValid', isPasswordValid);
      if (!user || !isPasswordValid) {
        return res.status(404).json({ message: 'User not found' });
      }
      const token = await getToken(user);
      sendUserCookie(res, token);
      return res.status(200).json({ message: 'Login successful', user, token });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  }
  async function signup(req: Request, res: Response) {
    const { name, email, password, role } = req.body;
    const encryptedPassword = await encrypt.encryptpass(password);
    const user = repository.create({
      name,
      email,
      password: encryptedPassword,
      role,
    });
    // const user = new User();
    // user.name = name;
    // user.email = email;
    // user.password = encryptedPassword;
    // user.role = role;

    // await repository.save(user);

    // userRepository.create({ Name, email, password });
    const token = encrypt.generateToken({ id: user.id });

    return res
      .status(200)
      .json({ message: 'User created successfully', token, user });
  }
  return {
    getToken,
    sendUserCookie,
    renew,
    logout,
    login,
    signup,
  };
}
