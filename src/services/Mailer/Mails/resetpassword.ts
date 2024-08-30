import env from '../../../env';
import { TemplateEmail, TemplateVars, Theme } from './emailTemplate';

export interface ResetPassworsVars extends TemplateVars {
  account?: {
    email?: string;
  };
  token?: string;
}

export const ResetpasswordEmail = (vars: ResetPassworsVars, theme: Theme) =>
  TemplateEmail(
    {
      ...vars,
      subject: 'Mot de passe oublié ?',
      text: `Quelqu'un a demandé un nouveau mot de passe pour le compte associé à ${vars?.account?.email}.
  Aucune modification n'a encore été apportée à votre compte.
  
  Vous pouvez réinitialiser votre mot de passe en cliquant sur le bouton ci-dessous :
`,
      afterText: `Ce lien est valide 1h.
  
  Si vous n'avez pas demandé de nouveau mot de passe, veuillez ne pas tenir compte de cet e-mail.
`,
      action_name: 'Réinitialiser',
      action_url: `${env.APP_URL}/login/define-password?token=${vars.token}`,
    },
    theme,
  );

export default ResetpasswordEmail;
