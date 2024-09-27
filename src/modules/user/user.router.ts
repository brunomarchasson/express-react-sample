import SwaggerRouterRouter from '../../services/open-api/swagger-router';
import { ROLE_ENUM } from '../auth/enums';
import { canAccess } from '../auth/middleware/can-access.middleware';
import {
  handleCreateSuperAdmin,
  handleCreateUser,
  handleGetCurrentUser,
  handleGetUsers,
  handleUpdateCurrentUser,
} from './user.controller';
import { userInSchema, userOutSchema, usersPaginatedSchema } from './user.dto';
import { createUserSchema, getUsersSchema } from './user.schema';

export const USER_ROUTER_ROOT = '/users';

const userRouter = new SwaggerRouterRouter(USER_ROUTER_ROOT);

userRouter.get(
  '/',
  {
    query: getUsersSchema,
    response: usersPaginatedSchema,
  },
  canAccess(),
  handleGetUsers,
);

userRouter.get(
  '/me',
  { response: userOutSchema },
  canAccess(),
  handleGetCurrentUser,
);
userRouter.put(
  '/me',
  {
    body: userInSchema.omit({ role: true }),
    response: userOutSchema,
  },
  canAccess(),
  handleUpdateCurrentUser,
);

userRouter.post(
  '/user',
  { body: createUserSchema },
  canAccess('roles', [ROLE_ENUM.SUPER_ADMIN]),
  handleCreateUser,
);

userRouter.post('/_super-admin', {}, handleCreateSuperAdmin);

export default userRouter.getRouter();
