import SwaggerRouterRouter from '../../services/open-api/swagger-router';
import {
  invitationAcceptInSchema,
  invitationInSchema,
  invitationOutSchema,
  invitationRenewInSchema,
} from '../../comon/types/api';
import {
  handleCreateInvitation,
  handleGetInvitation,
  handleRenewInvitation,
} from './invitation.controller';
import { canAccess } from './middleware/can-access.middleware';
import { ROLE_ENUM } from './enums';

export const INVITATION_ROUTER_ROOT = '/auth/invitations';

const invitationRouter = new SwaggerRouterRouter(INVITATION_ROUTER_ROOT);

invitationRouter.post(
  '/',
  { body: invitationInSchema, response: invitationOutSchema },
  canAccess('roles', [ROLE_ENUM.ADMIN]),
  handleCreateInvitation,
);
invitationRouter.get(
  '/',
  {
    response: invitationOutSchema,
  },
  canAccess(),
  handleGetInvitation,
);

invitationRouter.put(
  '/:id',
  {
    params: invitationRenewInSchema,
    response: invitationOutSchema,
  },
  handleRenewInvitation,
);
invitationRouter.post(
  '/accept',
  {
    body: invitationAcceptInSchema,
    response: invitationOutSchema,
  },
  handleRenewInvitation,
);

export default invitationRouter.getRouter();
