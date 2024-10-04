import { Request, Response } from 'express';
import {
  errorResponse,
  successResponse,
} from '../../services/open-api/api.utils';
import { createInvitation, renewInvitation } from './invitation.service';
import { StatusCodes } from 'http-status-codes';
import {
  invitationInType,
  invitationRenewInSchemaType,
} from '../../comon/types/api';
import { JWTPayload } from './auth.utils';
import { getUserById } from '../user/user.services';

export const handleGetInvitation = async (
  req: Request<unknown, unknown, invitationInType>,
  res: Response,
) => {
  const user = await getUserById(
    (req.context?.currentUser as JWTPayload).userId,
  );

  if (!user) return errorResponse(res);

  return successResponse(res, 'invitation retrived', user, StatusCodes.OK);
};

export const handleRenewInvitation = async (
  req: Request<invitationRenewInSchemaType, unknown, unknown>,
  res: Response,
) => {
  const user = await getUserById(req.params.id);

  if (!user) return errorResponse(res);
  await renewInvitation(user);
  return successResponse(res, 'invitation retrived', user, StatusCodes.OK);
};

export const handleCreateInvitation = async (
  req: Request<unknown, unknown, invitationInType>,
  res: Response,
) => {
  const data = req.body;
  const user = await createInvitation({
    ...data,
  });
  return successResponse(
    res,
    'Email has been sent to the user',
    user,
    StatusCodes.CREATED,
  );
};
