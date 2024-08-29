import { DataSource } from 'typeorm';

import { User } from './entity/User.entity';
import env from './env';
console.log('User', User);
const { DB_HOST, DB_PORT, DB_USERNAME, DB_PASSWORD, DB_DATABASE, APP_ENV } =
  env;

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: DB_HOST,
  port: DB_PORT,
  username: DB_USERNAME,
  password: DB_PASSWORD,
  database: DB_DATABASE,
  synchronize: APP_ENV === 'dev' ? false : false,
  logging: APP_ENV === 'dev' ? false : false,
  entities: [User],
  migrations: [__dirname + '/migration/*.ts'],
  subscribers: [],
});
