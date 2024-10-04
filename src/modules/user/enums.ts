export enum USER_STATUS {
  INVITED = 'INVITED',
  ACTIVE = 'ACTIVE',
  DEACTIVATED = 'DEACTIVATED',
}

export type UserStatusType = keyof typeof USER_STATUS;
