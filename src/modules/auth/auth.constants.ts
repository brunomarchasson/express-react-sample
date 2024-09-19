import { CookieOptions } from 'express';
import ms from 'ms';
import env from '../../env';

// const clientSideUrl = new URL(config.CLIENT_SIDE_URL);

export const AUTH_COOKIE_KEY = 'accessToken';

export const COOKIE_CONFIG: CookieOptions = {
  httpOnly: true,
  // sameSite: 'lax',
  secure: env.APP_ENV === 'prod' ? true : false,
  maxAge: ms(env.SESSION_EXPIRES as string),
  // domain: clientSideUrl.hostname,
};
