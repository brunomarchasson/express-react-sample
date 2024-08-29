import { AppDataSource } from './data-source';
import cookieParser from 'cookie-parser';
import express from 'express';
import dotenv from 'dotenv';
import path from 'node:path';
import { authRouter } from './routes/auth.routes';
import { userRouter } from './routes/user.routes';
import { errorHandler } from './middleware/errorHandler';
dotenv.config();

const app = express();
app.use(express.json());
app.use(cookieParser());
const { PORT = 3000 } = process.env;
app.use(errorHandler);
app.use('/auth', authRouter);
app.use('/api/v1', userRouter);

app.get('/api/v1/health', (req, res) => {
  res.send({ status: 'ok' });
});

app.use(express.static('../app'));
app.get('*', (_req, res) => {
  res.sendFile(path.join(__dirname, '../app/index.html'));
});
// app.get("*", (req: Request, res: Response) => {
//     console.log('rrrrr', req)
//   res.status(505).json({ message: "Bad Request" });
// });

AppDataSource.initialize()
  .then(async () => {
    app.listen(PORT, () => {
      console.log('Server is running on http://localhost:' + PORT);
    });
    console.log('Data Source has been initialized!');
  })
  .catch((error) => console.log(error));
