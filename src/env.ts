import { cleanEnv, num, str, url } from 'envalid';
/**
 * Ensures that all of the environment dependencies are met.
 *
 * @see https://github.com/af/envalid
 */
import { config } from 'dotenv';
// see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
config();

export default cleanEnv(process.env, {
  APP_NAME: str(),
  APP_URL: url(),
  PORT: num({ default: 9000 }),
  APP_ENV: str({ choices: ['prod', 'test', 'dev'] }),

  SMTP_SERVER: str(),
  SMTP_PORT: num(),
  SMTP_USER: str(),
  SMTP_PWD: str(),

  DB_CLIENT: str(),
  DB_HOST: str(),
  DB_PORT: num({ default: 5432 }),
  DB_USERNAME: str(),
  DB_PASSWORD: str(),
  DB_DATABASE: str(),

  JWT_SECRET: str(),
  SESSION_EXPIRES: str({ default: '10d' }),
});
