import { Request, Response } from 'express';
import {
  ChangePasswordSchemaType,
  ForgetPasswordSchemaType,
  LoginUserByEmailSchemaType,
  RegisterUserByEmailSchemaType,
  ResetPasswordSchemaType,
} from './auth.schema';
import {
  changePassword,
  forgetPassword,
  // googleLogin,
  loginUserByEmail,
  registerUserByEmail,
  renewToken,
  resetPassword,
} from './auth.service';
import {
  errorResponse,
  successResponse,
} from '../../services/open-api/api.utils';
import { JWTPayload } from './auth.utils';
import { AUTH_COOKIE_KEY, COOKIE_CONFIG } from './auth.constants';
import { getUserById } from '../user/user.services';
import logger from '../../services/Log/logger.service';

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
export const handleGetCurrentUser = async (req: Request, res: Response) => {
  await sleep(5000);
  const user = await getUserById(
    (req?.context?.currentUser as JWTPayload).userId,
  );
  if (!user) return errorResponse(res);
  return successResponse(res, undefined, user);
};

export const handleResetPassword = async (
  req: Request<unknown, unknown, ResetPasswordSchemaType>,
  res: Response,
) => {
  await resetPassword(
    (req.context?.currentUser as JWTPayload).userId,
    req.body,
  );

  return successResponse(res, 'Password successfully reset');
};

export const handleForgetPassword = async (
  req: Request<unknown, unknown, ForgetPasswordSchemaType>,
  res: Response,
) => {
  const user = await forgetPassword(req.body);

  return successResponse(res, 'Code has been sent', { userId: user.id });
};

export const handleChangePassword = async (
  req: Request<unknown, unknown, ChangePasswordSchemaType>,
  res: Response,
) => {
  await changePassword(
    (req.context?.currentUser as JWTPayload).userId,
    req.body,
  );
  return successResponse(res, 'Password successfully changed');
};

export const handleRegisterUser = async (
  req: Request<unknown, unknown, RegisterUserByEmailSchemaType>,
  res: Response,
) => {
  const user = await registerUserByEmail(req.body);

  return successResponse(res, 'User has been reigstered', user);
};

export const handleLogout = async (_: Request, res: Response) => {
  res.clearCookie(AUTH_COOKIE_KEY);

  return successResponse(res, 'Logout successful');
};

export const handleLoginByEmail = async (
  req: Request<unknown, unknown, LoginUserByEmailSchemaType>,
  res: Response,
) => {
  try {
    const { user, token } = await loginUserByEmail(req.body);
    res.cookie(AUTH_COOKIE_KEY, token, COOKIE_CONFIG);
    return successResponse(res, 'Login successful', { token: token, user });
  } catch (e) {
    console.log('rff');
    logger.error(e);
    res.status(401).end();
  }
};

export const handleLoginByToken = async (
  req: Request<unknown, unknown, LoginUserByEmailSchemaType>,
  res: Response,
) => {
  const { token, user } = await renewToken(
    req.context?.currentUser as JWTPayload,
  );
  res.cookie(AUTH_COOKIE_KEY, token, COOKIE_CONFIG);
  return successResponse(res, 'Login successful', {
    user,
    token: token,
  });
};

// export const handleGoogleLogin = async (_: Request, res: Response) => {
//   const googleAuthURL = `https://accounts.google.com/o/oauth2/v2/auth?response_type=code&client_id=${process.env.GOOGLE_CLIENT_ID}&redirect_uri=${process.env.GOOGLE_REDIRECT_URI}&scope=email profile`;
//   res.redirect(googleAuthURL);
// };
// export const handleGoogleCallback = async (
//   req: Request<unknown, unknown, unknown, GoogleCallbackQuery>,
//   res: Response,
// ) => {
//   const user = await googleLogin(req.query);
//   if (!user) throw new Error('Failed to login');
//   res.cookie(
//     AUTH_COOKIE_KEY,
//     user.socialAccount?.[0]?.accessToken,
//     COOKIE_CONFIG,
//   );

//   return successResponse(res, 'Logged in successfully', {
//     token: user.socialAccount?.[0]?.accessToken,
//   });
// };
