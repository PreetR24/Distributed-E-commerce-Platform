import express from 'express';

import notificationRoutes from '@routes/notification.routes';
import healthRoutes from '@routes/health.routes';

import {
    globalErrorHandler,
    register,
    metricsMiddleware,
    authenticateRequest
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
    '/api/v1/notifications',
    authenticateRequest,
    notificationRoutes
);

app.use('/api/v1/health', healthRoutes);

app.use(globalErrorHandler);

export default app;