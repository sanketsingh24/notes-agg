import config from './config';
import apiRouter from './api';

import express from 'express';
const server = express();

server.use('/api', apiRouter);
server.use(express.static('public'));

server.listen(config.port, () => {
  console.info('Express on port ', config.port);
});
