import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { getUserById } from '../../user/user.services';
import { ROLE_ENUM } from '../enums';
import { errorResponse } from '../../../services/open-api/api.utils';
import { JWTPayload } from '../auth.utils';

export type CanAccessByType = 'roles';

export type CanAccessOptions = {
  roles: ROLE_ENUM | '*';
};

export const canAccess =
  <T extends CanAccessByType>(by?: T, access?: CanAccessOptions[T][]) =>
  async (req: Request, res: Response, next?: NextFunction) => {
    try {
      const requestUser = req.context?.currentUser as JWTPayload;

      if (!requestUser) {
        return errorResponse(
          res,
          "token isn't attached or expired",
          StatusCodes.UNAUTHORIZED,
        );
      }
      const currentUser = await getUserById(requestUser.userId);

      if (!currentUser) {
        return errorResponse(res, 'Login again', StatusCodes.UNAUTHORIZED);
      }

      // if (currentUser.otp !== null) {
      //   return errorResponse(
      //     res,
      //     'Your account is not verified',
      //     StatusCodes.UNAUTHORIZED,
      //   );
      // }

      let can = false;

      const accessorsToScanFor = access;

      if (by === 'roles' && accessorsToScanFor) {
        can = accessorsToScanFor.includes(currentUser.role);
      }

      if (!accessorsToScanFor) {
        can = Boolean(currentUser.email);
      }

      if (!can && by === 'roles') {
        return errorResponse(
          res,
          'User is not authorized to perform this action',
          StatusCodes.UNAUTHORIZED,
          { [`${by}_required`]: access },
        );
      }

      if (currentUser && !by && !access) {
        can = true;
      }

      if (!can) {
        return errorResponse(
          res,
          'User is not authenticated',
          StatusCodes.UNAUTHORIZED,
          access,
        );
      }
    } catch (err) {
      return errorResponse(
        res,
        (err as Error).message,
        StatusCodes.UNAUTHORIZED,
        access,
      );
    }

    next?.();
  };
