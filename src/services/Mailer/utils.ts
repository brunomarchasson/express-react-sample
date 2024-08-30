import nodemailer from 'nodemailer';
import MAILS from './Mails/index';
import env from '../../env';
import { httpLogger } from '../Log';

const defaultVars = {
  projectName: env.APP_NAME ?? 'Awesome project',
  email: 'toto@toto.com',
  account: {
    id: '1',
    email: 'toto@toto.com',
  },
  inviteToken: '[token]',
};

const defaultTheme = {
  bgColor: '#042440',
  textColor: '#ffffff',
  primaryColor: '#29B3CC',
  secondaryColor: '#112f4a',
  tertiaryColor: '#447C94',
  round: '15px',
};

export const generateEmail = (
  emailId: string,
  vars = defaultVars,
  theme = defaultTheme,
) => {
  const mailToRender = MAILS[emailId];
  if (!mailToRender) {
    httpLogger.error('mail not found', { mailId: emailId });
    throw new Error('mail not found');
  }
  return mailToRender(vars, theme) as string;
};

export const sendEmail = (email: string, subject: string, html: string) =>
  new Promise<void>((resolve, reject) => {
    try {
      const transporter = nodemailer.createTransport({
        host: env.SMTP_SERVER,
        port: env.SMTP_PORT,
        secure: true,
        auth: {
          user: env.SMTP_USER,
          pass: env.SMTP_PWD,
        },
      });

      const mailOptions = {
        from: env.SMTP_USER,
        to: email,
        subject,
        html: html,
      };

      transporter.sendMail(mailOptions, (error) => {
        if (error) {
          console.error(error);
          return reject(error);
        }
        return resolve();
      });
    } catch (err) {
      console.error(err);
      reject(err);
    }
    resolve();
  });

export default generateEmail;
