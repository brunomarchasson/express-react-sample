import express from 'express';
import authRouter, { AUTH_ROUTER_ROOT } from '../modules/auth/auth.router';
import userRouter, { USER_ROUTER_ROOT } from '../modules/user/user.router';
import invitationRouter, {
  INVITATION_ROUTER_ROOT,
} from '../modules/auth/invitation.router';

const apiRouter = express.Router();

apiRouter.use(AUTH_ROUTER_ROOT, authRouter);
apiRouter.use(INVITATION_ROUTER_ROOT, invitationRouter);

apiRouter.use(USER_ROUTER_ROOT, userRouter);
apiRouter.use('*', (_req, res) => {
  res.status(404).end();
});
export default apiRouter;
