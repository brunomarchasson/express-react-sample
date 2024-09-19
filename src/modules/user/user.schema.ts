import * as z from 'zod';
import { passwordValidationSchema } from '../common/common.schema';
import { ROLE_ENUM, RoleType } from '../auth/enums';

export const baseCreateUser = z.object({
  email: z
    .string({ required_error: 'Email is required' })
    .email({ message: 'Email is not valid' }),
  password: passwordValidationSchema('Password'),
});

export const createUserSchema = z
  .object({
    name: z.string({ required_error: 'First name is required' }).min(1),
  })
  .merge(baseCreateUser);

export const getUsersSchema = z.object({
  searchString: z.string().optional(),
  limitParam: z
    .string()
    .default('10')
    .refine(
      (value) => !isNaN(Number(value)) && Number(value) >= 0,
      'Input must be positive integer',
    )
    .transform(Number),
  pageParam: z
    .string()
    .default('1')
    .refine(
      (value) => !isNaN(Number(value)) && Number(value) >= 0,
      'Input must be positive integer',
    )
    .transform(Number),
  filterByRole: z.enum(Object.keys(ROLE_ENUM) as [RoleType]).optional(),
});

export type CreateUserSchemaType = z.infer<typeof createUserSchema>;
export type GetUsersSchemaType = z.infer<typeof getUsersSchema>;
