import jwt, { JsonWebTokenError, SignOptions, verify } from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import env from '../../env';
import logger from '../../services/Log/logger.service';

export interface GoogleTokenResponse {
  access_token: string;
  expires_in: number;
  id_token: string;
  refresh_token?: string;
  scope: string;
  token_type: string;
}

export interface GoogleTokensRequestParams {
  code: string;
}

export type JWTPayload = {
  userId: string;
  email: string;
};

export type PasswordResetTokenPayload = {
  userId: string;
  email: string;
};

export type SetPasswordTokenPayload = {
  userId: string;
  email: string;
};

const saltRounds = 12;

export const hashPassword = async (password: string): Promise<string> => {
  return bcrypt.hash(password, saltRounds);
};

export const compareHash = async (
  hashed: string,
  plainPassword: string,
): Promise<boolean> => {
  return bcrypt.compare(plainPassword, hashed);
};

export const signToken = async (
  payload: JWTPayload,
  opts: SignOptions = {},
): Promise<string> => {
  return jwt.sign({ payload }, env.JWT_SECRET, {
    expiresIn: env.SESSION_EXPIRES,
    ...opts,
  });
};

export const signPasswordResetToken = async (
  payload: PasswordResetTokenPayload,
) => {
  return signToken(payload);
};

export const signSetPasswordToken = async (
  payload: SetPasswordTokenPayload,
) => {
  return signToken(payload);
};

export const verifyToken = async <
  T extends JWTPayload | PasswordResetTokenPayload | SetPasswordTokenPayload,
>(
  token: string,
): Promise<T> => {
  try {
    const decoded = verify(token, String(env.JWT_SECRET)) as { payload: T };
    return decoded.payload;
  } catch (err) {
    if (err instanceof Error) {
      throw new Error(err.message);
    }

    if (err instanceof JsonWebTokenError) {
      throw new Error(err.message);
    }

    logger.error('verifyToken', { err });
    throw err;
  }
};

// export const fetchGoogleTokens = async (
//   params: GoogleTokensRequestParams,
// ): Promise<GoogleTokenResponse> => {
//   const url = 'https://oauth2.googleapis.com/token';
//   const response = await fetch(url, {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
//     body: new URLSearchParams({
//       code: params.code,
//       client_id: process.env.GOOGLE_CLIENT_ID,
//       client_secret: process.env.GOOGLE_CLIENT_SECRET,
//       redirect_uri: process.env.GOOGLE_REDIRECT_URI,
//       grant_type: 'authorization_code',
//     }),
//   });

//   if (!response.ok) {
//     throw new Error('Failed to exchange code for tokens');
//   }

//   const data: GoogleTokenResponse = await response.json();
//   return data;
// };
// export interface GoogleUserInfo {
//   id: string; // User's unique Google ID
//   email: string; // User's email address
//   verified_email: boolean; // Whether the email is verified
//   name: string; // User's full name
//   given_name: string; // User's given name
//   family_name: string; // User's family name
//   picture: string; // URL of the user's profile picture
//   locale: string; // User's locale
// }

// export const getUserInfo = async (accessToken: string) => {
//   const userInfoResponse = await fetch(
//     'https://www.googleapis.com/oauth2/v2/userinfo',
//     {
//       headers: { Authorization: `Bearer ${accessToken}` },
//     },
//   );
//   if (!userInfoResponse.ok) {
//     throw new Error(`Error fetching user info`);
//   }
//   return userInfoResponse.json();
// };
