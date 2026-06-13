import express from 'express';

import notificationRoutes
from './routes/notification.routes';
import healthRoutes from '@routes/health.routes';

const app = express();

app.use(express.json());

app.use(
    '/api/v1/notifications',
    notificationRoutes
);

app.use('/api/v1/health', healthRoutes);

export default app;