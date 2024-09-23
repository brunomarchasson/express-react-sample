import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { CreateUserSchemaType, GetUsersSchemaType } from './user.schema';
import { createUser, deleteUser, getUsers } from './user.services';
import { JWTPayload } from '../auth/auth.utils';
import { successResponse } from '../../services/open-api/api.utils';
import { ROLE_ENUM } from '../auth/enums';

export const handleDeleteUser = async (req: Request, res: Response) => {
  await deleteUser(req.params.id);

  return successResponse(res, 'User has been deleted');
};

export const handleCreateUser = async (
  req: Request<unknown, unknown, CreateUserSchemaType>,
  res: Response,
) => {
  const data = req.body;

  const user = await createUser({
    ...data,
    role: ROLE_ENUM.DEFAULT_USER,
  });

  return successResponse(
    res,
    'Email has been sent to the user',
    user,
    StatusCodes.CREATED,
  );
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
    phoneNo: '123456789',
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

  return successResponse(res, undefined, { results, paginatorInfo });
};
