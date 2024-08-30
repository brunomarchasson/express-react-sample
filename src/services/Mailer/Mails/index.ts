// https://documentation.mjml.io/
import { TemplateVars, Theme } from './emailTemplate';
import ResetpasswordEmail from './resetpassword';

// type Vars<T> = {[key: string]: T extends TemplateVars }

export const MAILS: {
  [key: string]: (vars: TemplateVars, theme: Theme) => string;
} = {
  resetpasswordEMail: (vars: TemplateVars, theme: Theme): string =>
    ResetpasswordEmail(vars, theme),
};
export default MAILS;
