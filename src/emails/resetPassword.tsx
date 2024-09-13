import { Button, Text } from '@react-email/components';
import * as React from 'react';
import { Template } from './components/Template';
import { cta, text } from './components/styles';

interface ResetPasswordEmailProps {
  username?: string;
  resetPasswordLink?: string;
}

export function ResetPasswordEmail({
  username,
  resetPasswordLink,
}: ResetPasswordEmailProps) {
  return (
    <Template preview="reset password" title="reset password">
      <Text style={text}>Hi {username},</Text>
      <Text style={text}>
        Someone recently requested a password change for your account. If this
        was you, you can set a new password here:
      </Text>
      <Button style={cta} href={resetPasswordLink}>
        Reset password
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

ResetPasswordEmail.PreviewProps = {
  username: 'Alan',
  resetPasswordLink: '',
} as ResetPasswordEmailProps;
