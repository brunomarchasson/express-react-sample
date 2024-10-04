import SwaggerRouterRouter from '../../services/open-api/swagger-router';
import { ROLE_ENUM } from '../auth/enums';
import { canAccess } from '../auth/middleware/can-access.middleware';
import {
  handleCreateSuperAdmin,
  handleGetCurrentUser,
  handleGetUsers,
  handleUpdateCurrentUser,
} from './user.controller';
import { userInSchema, userOutSchema, usersPaginatedSchema } from './user.dto';
import { getUsersSchema } from './user.schema';

export const USER_ROUTER_ROOT = '/users';

const userRouter = new SwaggerRouterRouter(USER_ROUTER_ROOT);

userRouter.get(
  '/',
  {
    query: getUsersSchema,
    response: usersPaginatedSchema,
  },
  canAccess('roles', [ROLE_ENUM.ADMIN]),
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

// userRouter.post(
//   '/',
//   { body: userInSchema },
//   canAccess('roles', [ROLE_ENUM.ADMIN]),
//   handleCreateUser,
// );

userRouter.post('/_super-admin', {}, handleCreateSuperAdmin);

export default userRouter.getRouter();
