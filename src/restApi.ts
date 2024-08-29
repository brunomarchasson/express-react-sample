import packageJSON from '../package.json';
import express, { Application } from 'express';
import cors from 'cors';
import path from 'path';
import cookieParser from 'cookie-parser';
import { Request, Response } from 'express';
import { authRouter } from './routes/auth.routes';
import { userRouter } from './routes/user.routes';
import { errorHandler } from './middleware/errorHandler';
import { RespExampleType } from './typings/types';

const app: Application = express();

app.use(express.json({ limit: '20mb' }));
app.use(cookieParser());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.use(errorHandler);
// Serve a successful response. For use with wait-on
app.use('/auth', authRouter);
app.use('/api/v1', userRouter);

app.get('/api/v1/health', (req, res) => {
  res.send({ status: 'ok' });
});

app.get(`/api/v1/version`, (req: Request, res: Response) => {
  const respObj: RespExampleType = {
    id: 1,
    version: packageJSON.version,
    envVal: process.env.ENV_VALUE as string, // sample server-side env value
  };
  res.send(respObj);
});

console.log('currentDir', __dirname);

// Serve storybook production bundle
app.use('/storybook', express.static('dist/storybook'));

// Serve app production bundle
app.use(express.static('dist/app'));

// Handle client routing, return all requests to the app
app.get('*', (_req, res) => {
  res.sendFile(path.join(__dirname, 'app/index.html'));
});

export default app;
