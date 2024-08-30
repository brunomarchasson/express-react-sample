import * as express from 'express';
import { UserController } from '../controllers/user.controllers';
import { authorization } from '../middleware/authorization';
import { authentification } from '../services/Auth';
const Router = express.Router();

Router.get(
  '/users',
  [authentification, authorization(['admin'])],
  UserController.getUsers,
);
// Router.get(
//   "/profile",
//   [authentification, authorization(["user", "admin"])],
//   AuthController.getProfile
// );
Router.put(
  '/update/:id',
  [authentification, authorization(['user', 'admin'])],
  UserController.updateUser,
);
Router.delete(
  '/delete/:id',
  authentification,
  authorization(['admin']),
  UserController.deleteUser,
);
export { Router as userRouter };
