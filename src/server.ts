import 'reflect-metadata';
import express from 'express';
import swaggerUi from 'swagger-ui-express';

import './database';

import './shared/container';

import 'express-async-errors';

import { AppError } from './errors/AppError';
import { router } from './routes/index';
import swaggerFile from './swagger.json';

const app = express();

app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use('/', router);

app.use((err: Error, request, response, next) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      message: err.message,
    });
  }

  return response.status(500).json({
    status: 'error',
    message: `Internal server error - ${err.message}`,
  });
});

app.listen(3333, () => {
  console.log('Agora é pra valer');
});
