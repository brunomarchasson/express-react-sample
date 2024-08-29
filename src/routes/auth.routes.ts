import * as express from 'express';
import { authentification } from '../middleware/authentification';
import { UserController } from '../controllers/user.controllers';
import { AuthController } from '../controllers/auth.controller';
const Router = express.Router();

// Router.get(
//   "/profile",
//   authentification,
//   authorization(["user", "admin"]),
//   AuthController.getProfile
// );
Router.get('/login', authentification, AuthController.renew);
Router.post('/login', AuthController.login);
Router.post('/logout', AuthController.logout);
Router.post('/signup', UserController.signup);
export { Router as authRouter };
