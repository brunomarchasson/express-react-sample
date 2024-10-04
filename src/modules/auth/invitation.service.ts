import { invitationInType } from '../../comon/types/api';
import { AppDataSource } from '../../data-source';
import { InvitationEmail } from '../../emails/invitation';
import { User } from '../../entity/User.entity';
import generateEmail, { sendEmail } from '../../services/Mailer/utils';
import { generateInvitationLink } from '../../services/open-api/api.utils';
import { createUser } from '../user/user.services';
import { InvitationTokenPayload, signInvitationToken } from './auth.utils';

const createToken = async (user: User) => {
  const tokenPayload: InvitationTokenPayload = {
    userId: String(user.id),
    email: user?.email,
  };
  const token = await signInvitationToken(tokenPayload);
  user.inviteToken = token;
  await AppDataSource.manager.update(User, user.id, { inviteToken: token });
  return token;
};

const sendInvitation = async (user: User) => {
  const token = user.inviteToken ?? (await createToken(user));
  const url = generateInvitationLink(token);
  const html = await generateEmail(InvitationEmail, {
    username: user.name,
    invitationLink: url,
  });
  sendEmail(user.email, 'invitation', html);
};
export const createInvitation = async (
  payload: invitationInType,
): Promise<User> => {
  const createdUser = await createUser(payload, true);
  await sendInvitation(createdUser);
  return createdUser;
};

export const renewInvitation = async (user: User): Promise<void> => {
  await createToken(user);
  await sendInvitation(user);
};

export const acceptInvitation = async (): Promise<void> => {};
