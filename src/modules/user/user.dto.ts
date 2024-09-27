import z from 'zod';
import { ROLE_ENUM } from '../auth/enums';
import { definePaginatedResponse } from '../common/common.utils';

// export const SocialAccountTypeZ = z.enum(
//   Object.keys(SOCIAL_ACCOUNT_ENUM) as [SocialAccountType],
// );

export const RoleTypeZ = z.nativeEnum(ROLE_ENUM);

// export const socialAccountInfoSchema = z.object({
//   accountType: SocialAccountTypeZ,
//   accessToken: z.string(),
//   tokenExpiry: z.date(),
//   refreshToken: z.string().optional(),
//   accountID: z.string(),
// });

export const userOutSchema = z.object({
  id: z.string().optional(),
  email: z.string().email(),
  avatar: z.string().url().optional().nullable(),
  name: z.string(),
  role: RoleTypeZ,
  updatedAt: z.date().optional(),
  createdAt: z.date().optional(),
});

export const userInSchema = z.object({
  email: z.string().email(),
  avatar: z.string().url().optional().nullable(),
  name: z.string().min(1),
  role: RoleTypeZ,
});
export type userInType = z.infer<typeof userInSchema>;

export const userSchema = userOutSchema.extend({
  // otp: z.string().nullable().optional(),
  password: z.string(),
  // passwordResetCode: z.string().optional().nullable(),
});

export const usersPaginatedSchema = definePaginatedResponse(userOutSchema);

export type UserModelType = z.infer<typeof userSchema>;
export type UserType = z.infer<typeof userSchema>;
// export type SocialAccountInfoType = z.infer<typeof socialAccountInfoSchema>;
export type UserPaginatedType = z.infer<typeof usersPaginatedSchema>;
