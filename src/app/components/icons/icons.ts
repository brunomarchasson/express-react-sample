import Eye from './assets/eye.svg?react';
import EyeCrossed from './assets/eye-crossed.svg?react';
import {
  Camera,
  CircleCheck,
  CircleCheckBig,
  CircleUserRound,
  ImageUp,
  LogIn,
  LogOut,
  SquareX,
  SquareXIcon,
  Trash,
  UserRoundPen,
  Mail,
  UserRoundPlus,
  UsersRound,
} from 'lucide-react';

export const icons = {
  Eye,
  EyeCrossed,
  Camera,
  ImageUp,
  Trash,
  CircleCheckBig,
  CircleCheck,
  UserRoundPen,
  Mail,
  LogIn,
  LogOut,
  UserRoundPlus,
  UsersRound,
  CircleUserRound,
  SquareX,
  SquareXIcon,
};

// import { lazy as _lazy } from "react";

// function lazy(importFn: Function) {
//   return _lazy(async () => {
//     const m = await importFn();
//     return { default: m.ReactComponent };
//   });
// }

// export const icons = {
//   Eye: lazy(async () => import( "./assets/eye.svg").ReactComponent),
//   EyeCrossed: lazy(async () => import("./assets/eye-crossed.svg")),
//   };
