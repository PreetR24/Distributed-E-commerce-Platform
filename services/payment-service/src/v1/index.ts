import { Router } from 'express';

import paymentRoutes from '@routes/payment.routes';
import webhookRoutes from '@routes/webhook.routes';
import healthRoutes from '@routes/health.routes';
import { authenticateRequest } from '@shared/common';

const router = Router();

router.use('/payments', authenticateRequest, paymentRoutes);

router.use('/webhooks/payment', webhookRoutes);

router.use('/health', healthRoutes);

export default router;