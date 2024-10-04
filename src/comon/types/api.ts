import { z } from 'zod';
import { loginResponseSchema } from '../../modules/auth/auth.schema';
import {
  RoleTypeZ,
  userInSchema,
  userOutSchema,
} from '../../modules/user/user.dto';

export { userInSchema } from '../../modules/user/user.dto';

export type UserInType = z.infer<typeof userInSchema>;

export type LoginResponseSchemaType = z.infer<typeof loginResponseSchema>;
export type UserDTO = z.infer<typeof userOutSchema>;

//invitation
export const invitationInSchema = z.object({
  email: z.string().email(),
  name: z.string().min(1),
  role: RoleTypeZ,
});
export type invitationInType = z.infer<typeof invitationInSchema>;

export const invitationRenewInSchema = z.object({
  id: z.string(),
});
export type invitationRenewInSchemaType = z.infer<
  typeof invitationRenewInSchema
>;

export const invitationAcceptInSchema = z.object({
  password: z.string(),
});
export type invitationAcceptInSchemaType = z.infer<
  typeof invitationAcceptInSchema
>;

export const invitationOutSchema = userOutSchema;
export type invitationOutType = z.infer<typeof invitationOutSchema>;
