import express from 'express';

import analyticsRoutes
from './routes/analytics.routes';

import healthRoutes
from './routes/health.routes';

import {
    globalErrorHandler
}
from '@shared/common';

const app = express();

app.use(express.json());

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