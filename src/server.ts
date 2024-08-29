import 'reflect-metadata';
import { createServer } from 'http';
import app from './restApi';
import env from './env';
import { AppDataSource } from './data-source';

// import { createWebSocketServer } from "path/to/websocket";

const { PORT } = env;

const server = createServer();

server.on('request', app);
// createWebSocketServer(server);

// hard-coded port for simplicity until more flexibility needed
AppDataSource.initialize().then(async () => {
  server.listen(PORT, () => {
    console.log(`API started at ${env.APP_URL}`);
  });
});
