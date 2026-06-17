import express from 'express';

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

app.use(express.json());

app.use(metricsMiddleware);

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