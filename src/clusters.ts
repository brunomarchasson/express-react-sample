import 'reflect-metadata';
import cluster from 'cluster';
import env from './env';
import os from 'os';
import { createHttpServer } from './server';

const totalCPUs = os.availableParallelism();

const clustersCount = Math.min(totalCPUs, env.MAX_CLUSTERS);

if (cluster.isPrimary) {
  console.log(`Number of CPUs is ${totalCPUs}`);
  console.log(`Primary ${process.pid} is running`);

  // Fork workers.
  for (let i = 0; i < clustersCount; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker) => {
    console.log(`worker ${worker.process.pid} died`);
    console.log("Let's fork another worker!");
    cluster.fork();
  });
} else {
  createHttpServer();
}
