import 'reflect-metadata';
import { createServer } from 'http';
import app from './restApi';
import env from './env';

const { PORT } = env;

export function createHttpServer() {
  const server = createServer(app);
  server.listen(PORT, () => {
    console.log(`API started at ${env.APP_URL}`);
  });
}

function isEntryPoint() {
  return require.main === module;
}

if (isEntryPoint()) {
  createHttpServer();
}
