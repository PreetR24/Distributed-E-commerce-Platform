import express from 'express';

import cors from 'cors';

import helmet from 'helmet';

import morgan from 'morgan';

import v1Routes from './v1';

import {
    globalErrorHandler,
    register,
    metricsMiddleware
 }
from '@shared/common';

const app = express();

app.get(
    '/metrics',
    async (_req, res) => {
        res.set(
            'Content-Type',
            register.contentType
        );
        res.end(
            await register.metrics()
        );
    }
);

app.use(cors());

app.use(helmet());

app.use(morgan('dev'));

app.use(express.json());

app.use(metricsMiddleware);

app.use('/api/v1', v1Routes);

app.use(globalErrorHandler);

export default app;