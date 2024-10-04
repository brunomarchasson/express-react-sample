import { Button, Text } from '@react-email/components';
import * as React from 'react';
import { Template } from './components/Template';
import { cta, text } from './components/styles';

interface InvitationEmailProps {
  username?: string;
  invitationLink?: string;
}

export function InvitationEmail({
  username,
  invitationLink,
}: InvitationEmailProps) {
  return (
    <Template preview="invitation" title="invitation">
      <Text style={text}>Hi {username},</Text>
      <Text style={text}>Someone recently invited you</Text>
      <Button style={cta} href={invitationLink}>
        Join
      </Button>
      <Text style={text}>
        If you don&apos;t want to change your password or didn&apos;t request
        this, just ignore and delete this message.
      </Text>
      <Text style={text}>
        To keep your account secure, please don&apos;t forward this email to
        anyone.
      </Text>
    </Template>
  );
}

InvitationEmail.PreviewProps = {
  username: 'Alan',
  resetPasswordLink: '',
} as InvitationEmailProps;
