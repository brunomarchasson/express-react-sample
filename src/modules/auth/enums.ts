export enum ROLE_ENUM {
  DEFAULT_USER = 'DEFAULT_USER',
  ADMIN = 'ADMIN',
  SUPER_ADMIN = 'SUPER_ADMIN',
}

export const SOCIAL_ACCOUNT_ENUM = {
  GOOGLE: 'GOOGLE',
  FACEBOOK: 'FACEBOOK',
  APPLE: 'APPLE',
} as const;

export type SocialAccountType = keyof typeof SOCIAL_ACCOUNT_ENUM;
export type RoleType = keyof typeof ROLE_ENUM;
