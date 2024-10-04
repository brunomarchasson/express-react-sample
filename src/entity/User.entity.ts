import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ROLE_ENUM } from '../modules/auth/enums';
import { USER_STATUS } from '../modules/user/enums';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', nullable: true })
  name: string;

  @Column({ type: 'varchar', nullable: false })
  email: string;

  @Column({ type: 'varchar', nullable: false })
  password: string;

  @Column({ type: 'enum', enum: ROLE_ENUM, default: ROLE_ENUM.DEFAULT_USER })
  role: ROLE_ENUM;

  @Column({ type: 'enum', enum: USER_STATUS, default: USER_STATUS.INVITED })
  status: USER_STATUS;

  @Column({ type: 'text', nullable: true })
  resetPasswordToken: string | null;

  @Column({ type: 'text', nullable: true })
  inviteToken: string | null;

  @Column({ type: 'bool', nullable: true })
  active: boolean | null;

  @Column({ type: 'text', nullable: true })
  avatar: string | null;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;
}
