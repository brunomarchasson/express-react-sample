// import { GoogleCallbackQuery } from '../../types';

import { ResetPasswordEmail } from '../../emails/resetPassword';
import { generateResetPasswordLink } from '../../services/open-api/api.utils';
import generateEmail, { sendEmail } from '../../services/Mailer/utils';
import { UserType } from '../user/user.dto';
import {
  createUser,
  getUserByEmail,
  getUserById,
  updateUser,
} from '../user/user.services';
import {
  ChangePasswordSchemaType,
  ForgetPasswordSchemaType,
  LoginUserByEmailSchemaType,
  RegisterUserByEmailSchemaType,
  ResetPasswordSchemaType,
} from './auth.schema';
import {
  compareHash,
  hashPassword,
  JWTPayload,
  signPasswordResetToken,
  signToken,
} from './auth.utils';
import { ROLE_ENUM } from './enums';
import { USER_STATUS } from '../user/enums';

export const resetPassword = async (
  userId: string,
  payload: ResetPasswordSchemaType,
) => {
  // const user = await getUserById(userId);

  // if (!user || user.passwordResetCode !== payload.code) {
  //   throw new Error('token is not valid or expired, please try again');
  // }

  const hashedPassword = await hashPassword(payload.password);

  await updateUser(userId, {
    password: hashedPassword,
  });
};

export const forgetPassword = async (
  payload: ForgetPasswordSchemaType,
): Promise<UserType> => {
  const user = await getUserByEmail(payload.email);

  if (!user) {
    throw new Error("user doesn't exists");
  }

  const jwtPayload: JWTPayload = {
    userId: String(user.id),
    email: user?.email,
  };

  const token = await signPasswordResetToken(jwtPayload);

  const url = generateResetPasswordLink(token);
  const html = await generateEmail(ResetPasswordEmail, {
    username: user.name,
    resetPasswordLink: url,
  });
  sendEmail(user.email, 'reset password', html);
  return user;
};

export const changePassword = async (
  userId: string,
  payload: ChangePasswordSchemaType,
): Promise<void> => {
  const user = await getUserById(userId);

  if (!user || !user.password) {
    throw new Error('User is not found');
  }

  const isCurrentPassowordCorrect = await compareHash(
    user.password,
    payload.currentPassword,
  );

  if (!isCurrentPassowordCorrect) {
    throw new Error('current password is not valid');
  }

  const hashedPassword = await hashPassword(payload.newPassword);

  await updateUser(userId, { password: hashedPassword });
};

export const registerUserByEmail = async (
  payload: RegisterUserByEmailSchemaType,
): Promise<UserType> => {
  const userExistByEmail = await getUserByEmail(payload.email);

  if (userExistByEmail) {
    throw new Error('Account already exist with same email address');
  }

  const user = await createUser(
    { ...payload, role: ROLE_ENUM.DEFAULT_USER, status: USER_STATUS.ACTIVE },
    false,
  );

  return user;
};

export const renewToken = async (currentToken: JWTPayload) => {
  const user = await getUserById(currentToken.userId);
  const token = await signToken(currentToken);
  return { token, user };
};

export const loginUserByEmail = async (
  payload: LoginUserByEmailSchemaType,
): Promise<{ token: string; user: UserType }> => {
  const user = await getUserByEmail(payload.email);

  if (!user || !(await compareHash(user.password, payload.password))) {
    throw new Error('Invalid email or password');
  }

  const jwtPayload: JWTPayload = {
    userId: String(user.id),
    email: user?.email,
  };

  const token = await signToken(jwtPayload);

  return { token, user };
};

// export const googleLogin = async (
//   payload: GoogleCallbackQuery,
// ): Promise<UserType> => {
//   const { code, error } = payload;

//   if (error) {
//     throw new Error(error);
//   }

//   if (!code) {
//     throw new Error('Code Not Provided');
//   }
//   const tokenResponse = await fetchGoogleTokens({ code });

//   const { access_token, refresh_token, expires_in } = tokenResponse;

//   const userInfoResponse = await getUserInfo(access_token);

//   const { id, email, name, picture } = userInfoResponse;

//   const user = await getUserByEmail(email);

//   if (!user) {
//     const newUser = await createUser({
//       email,
//       username: name,
//       avatar: picture,
//       role: ROLE_ENUM.DEFAULT_USER,
//       password: generateRandomNumbers(4),
//       socialAccount: [
//         {
//           refreshToken: refresh_token,
//           tokenExpiry: new Date(Date.now() + expires_in * 1000),
//           accountType: SOCIAL_ACCOUNT_ENUM.GOOGLE,
//           accessToken: access_token,
//           accountID: id,
//         },
//       ],
//     });

//     return newUser;
//   }

//   const updatedUser = await updateUser(user._id, {
//     socialAccount: [
//       {
//         refreshToken: refresh_token,
//         tokenExpiry: new Date(Date.now() + expires_in * 1000),
//         accountType: SOCIAL_ACCOUNT_ENUM.GOOGLE,
//         accessToken: access_token,
//         accountID: id,
//       },
//     ],
//   });

//   return updatedUser;
// };
