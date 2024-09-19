import 'reflect-metadata';
import cluster from 'cluster';
import env from './env';
import os from 'os';
import { createHttpServer } from './server';
import logger from './services/Log/logger.service';

const totalCPUs = os.availableParallelism();

const clustersCount = Math.min(totalCPUs, env.MAX_CLUSTERS);

if (cluster.isPrimary) {
  logger.info(`Number of CPUs is ${totalCPUs}`);
  logger.info(`Primary ${process.pid} is running`);

  // Fork workers.
  for (let i = 0; i < clustersCount; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker) => {
    logger.info(`worker ${worker.process.pid} died`);
    logger.info("Let's fork another worker!");
    cluster.fork();
  });
} else {
  createHttpServer();
}
