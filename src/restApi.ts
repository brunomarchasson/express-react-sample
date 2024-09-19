import './services/open-api/zod-extend';

import express, { Application } from 'express';
import cors from 'cors';
import path from 'path';
import cookieParser from 'cookie-parser';
import swaggerUi from 'swagger-ui-express';
import { errorHandler } from './middleware/errorHandler';
import { AppDataSource } from './data-source';
import { getOpenApiDocumentation } from './services/open-api/swagger-doc-generator';
import apiRouter from './routes/api.routes';
import logger from './services/Log/logger.service';
import { extractJwt } from './modules/auth/middleware/extract-jwt-schema.middleware';

AppDataSource.initialize()
  .then(() => {})
  .catch((err) => {
    logger.error('Error during Data Source initialization', err);
  });

const app: Application = express();
app.use(cookieParser());
app.use(cors());
// app.use(httpLogger);
app.use(express.json({ limit: '20mb' }));
app.use(express.urlencoded({ extended: true }));
app.use(errorHandler);
app.use('/api', extractJwt, apiRouter);

const swaggerDocument = getOpenApiDocumentation();
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Serve app production bundle
app.use('/public', express.static('public'));

app.use(express.static('dist/app'));

// Handle client routing, return all requests to the app
app.get('*', (_req, res) => {
  res.sendFile(path.join(__dirname, 'app/index.html'));
});

export default app;
