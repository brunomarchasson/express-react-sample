import z from 'zod';
import { baseCreateUser } from '../user/user.schema';
import { passwordValidationSchema } from '../common/common.schema';
import { userOutSchema } from '../user/user.dto';

export const resetPasswordSchema = z.object({
  password: passwordValidationSchema('Password'),
});

export const changePasswordSchema = z.object({
  currentPassword: passwordValidationSchema('Current password'),
  newPassword: passwordValidationSchema('New password'),
});

export const forgetPasswordSchema = z.object({
  email: z
    .string({ required_error: 'Email is required' })
    .email('Email must be valid'),
});

export const registerUserByEmailSchema = z
  .object({
    name: z.string({ required_error: 'Name is required' }).min(1),
    confirmPassword: passwordValidationSchema('Confirm Password'),
  })
  .merge(baseCreateUser)
  .strict();

export const loginUserByEmailSchema = baseCreateUser;

export type RegisterUserByEmailSchemaType = z.infer<
  typeof registerUserByEmailSchema
>;
export const loginResponseSchema = z.object({
  user: userOutSchema,
  token: z.string(),
});
export type LoginUserByEmailSchemaType = z.infer<typeof loginUserByEmailSchema>;
export type ChangePasswordSchemaType = z.infer<typeof changePasswordSchema>;
export type ForgetPasswordSchemaType = z.infer<typeof forgetPasswordSchema>;
export type ResetPasswordSchemaType = z.infer<typeof resetPasswordSchema>;
