import nodemailer from 'nodemailer';
import env from '../../env';
import { render } from '@react-email/components';
import React from 'react';

export const generateEmail = (
  Element: React.FC,
  props: object,
  options = undefined,
) => {
  return render(<Element {...props} />, options);
};

export const sendEmail = (to: string, subject: string, html: string) =>
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
        to: to,
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
