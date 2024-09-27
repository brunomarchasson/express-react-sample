import { z } from 'zod';
import { loginResponseSchema } from '../../modules/auth/auth.schema';
import { userInSchema, userOutSchema } from '../../modules/user/user.dto';

export { userInSchema } from '../../modules/user/user.dto';

export type UserInType = z.infer<typeof userInSchema>;

export type LoginResponseSchemaType = z.infer<typeof loginResponseSchema>;
export type UserDTO = z.infer<typeof userOutSchema>;
