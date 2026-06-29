import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';

import analyticsRoutes
from './routes/analytics.routes';

import healthRoutes
from './routes/health.routes';

import {
    globalErrorHandler,
    register,
    metricsMiddleware
}
from '@shared/common';

const app = express();

app.use(helmet());

app.use(cors());

app.use(morgan('combined'));

app.use(express.json());

app.use(metricsMiddleware);

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

app.use(
    '/api/v1/analytics',
    analyticsRoutes
);

app.use(
    '/api/v1/health',
    healthRoutes
);

app.use(globalErrorHandler);

export default app;