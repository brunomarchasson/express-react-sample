import SwaggerRouterRouter from '../../services/open-api/swagger-router';
import {
  changePasswordSchema,
  forgetPasswordSchema,
  loginResponseSchema,
  loginUserByEmailSchema,
  registerUserByEmailSchema,
  resetPasswordSchema,
} from './auth.schema';
import {
  handleChangePassword,
  handleForgetPassword,
  handleGetCurrentUser,
  handleLoginByEmail,
  handleLoginByToken,
  handleLogout,
  handleRegisterUser,
  handleResetPassword,
} from './auth.controller';
import { canAccess } from './middleware/can-access.middleware';
import { userOutSchema } from '../user/user.dto';

export const AUTH_ROUTER_ROOT = '/auth';

const authRouter = new SwaggerRouterRouter(AUTH_ROUTER_ROOT);

authRouter.post(
  '/register',
  { body: registerUserByEmailSchema },
  handleRegisterUser,
);

authRouter.post(
  '/login/email',
  { body: loginUserByEmailSchema, response: loginResponseSchema },
  handleLoginByEmail,
);
authRouter.get(
  '/login',
  { response: loginResponseSchema },
  canAccess(),
  handleLoginByToken,
);

authRouter.post('/logout', {}, handleLogout);

authRouter.get(
  '/me',
  { response: userOutSchema },
  canAccess(),
  handleGetCurrentUser,
);

authRouter.post(
  '/forget-password',
  { body: forgetPasswordSchema },
  handleForgetPassword,
);

authRouter.post(
  '/reset-password',
  { body: resetPasswordSchema },
  canAccess(),
  handleResetPassword,
);

authRouter.post(
  '/change-password',
  { body: changePasswordSchema },
  canAccess(),
  handleChangePassword,
);

export default authRouter.getRouter();
