import { z } from 'zod';
import { loginResponseSchema } from '../../modules/auth/auth.schema';
import { userOutSchema } from '../../modules/user/user.dto';

export type LoginResponseSchemaType = z.infer<typeof loginResponseSchema>;
export type UserDTO = z.infer<typeof userOutSchema>;
