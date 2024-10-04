import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { GetUsersSchemaType } from './user.schema';
import {
  createUser,
  deleteUser,
  getUserById,
  getUsers,
  updateUser,
} from './user.services';
import { JWTPayload } from '../auth/auth.utils';
import {
  errorResponse,
  successResponse,
} from '../../services/open-api/api.utils';
import { ROLE_ENUM } from '../auth/enums';
import { userInSchema } from './user.dto';
import { USER_STATUS } from './enums';

export const handleDeleteUser = async (req: Request, res: Response) => {
  await deleteUser(req.params.id);

  return successResponse(res, 'User has been deleted');
};

export const handleGetCurrentUser = async (req: Request, res: Response) => {
  const user = await getUserById(
    (req?.context?.currentUser as JWTPayload).userId,
  );
  if (!user) return errorResponse(res);
  return successResponse(res, undefined, user);
};

export const handleUpdateCurrentUser = async (req: Request, res: Response) => {
  const data = await userInSchema.omit({ role: true }).parseAsync(req.body);
  const user = await updateUser(
    (req?.context?.currentUser as JWTPayload).userId,
    data,
  );
  if (!user) return errorResponse(res);
  return successResponse(res, undefined, user);
};

export const handleCreateSuperAdmin = async (
  _: Request<unknown, unknown, unknown>,
  res: Response,
) => {
  const password = 'Pa$$w0rd!';

  const user = await createUser({
    email: 'admin@mailinator.com',
    name: 'Super Admin',
    password: password,
    role: ROLE_ENUM.SUPER_ADMIN,
    status: USER_STATUS.ACTIVE,
  });

  return successResponse(
    res,
    'Super Admin has been created',
    { email: user.email, password },
    StatusCodes.CREATED,
  );
};

export const handleGetUsers = async (
  req: Request<unknown, unknown, unknown, GetUsersSchemaType>,
  res: Response,
) => {
  const { results, paginatorInfo } = await getUsers(
    (req.context?.currentUser as JWTPayload).userId,

    // req.query,
  );
  console.log(results);
  return successResponse(res, undefined, { results, paginatorInfo });
};
