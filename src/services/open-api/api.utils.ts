import { StatusCodes } from 'http-status-codes';
import env from '../../env';
import { Response } from 'express';
import logger from '../Log/logger.service';

export const parseRouteString = (route?: string): string => {
  return (route ?? '').replace(/\/:(\w+)/g, '/{$1}');
};

export const routeToClassName = (route?: string): string => {
  const cleanedRoute = (route ?? '').replace(/^\/|\/$/g, '');

  const className =
    cleanedRoute.charAt(0).toUpperCase() + cleanedRoute.slice(1).toLowerCase();

  return className.endsWith('s') ? className.slice(0, -1) : className;
};

export const camelCaseToTitleCase = (input?: string): string => {
  let titleCase = (input ?? '')
    .replace(/([A-Z])/g, ' $1')
    .replace(/^./, (str) => str.toUpperCase())
    .trim();

  if (titleCase.split(' ')[0] === 'Handle') {
    titleCase = titleCase.slice(6);
  }

  return titleCase;
};

export const errorResponse = (
  res: Response,
  message?: string,
  statusCode?: StatusCodes,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload?: any,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  stack?: any,
): void => {
  try {
    res.status(statusCode ?? StatusCodes.BAD_REQUEST).json({
      success: false,
      message: message,
      data: payload,
      stack: stack,
    });

    return;
  } catch (err) {
    logger.error(err);
  }
};

export const successResponse = (
  res: Response,
  message?: string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload?: Record<any, any>,
  statusCode: StatusCodes = StatusCodes.OK,
): void => {
  try {
    res.status(statusCode).json(payload);
    return;
  } catch (err) {
    logger.error(err);
  }
};

export const generateResetPasswordLink = (token: string) => {
  return `${env.APP_URL}/reset-password?token=${token}`;
};
export const generateInvitationLink = (token: string) => {
  return `${env.APP_URL}/join?token=${token}`;
};

export const generateSetPasswordLink = (token: string) => {
  return `${env.APP_URL}/set-password?token=${token}`;
};
