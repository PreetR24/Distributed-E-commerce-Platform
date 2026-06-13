import { Router } from 'express';

import paymentRoutes from '@routes/payment.routes';

import webhookRoutes from '@routes/webhook.routes';

import healthRoutes from '@routes/health.routes';

const router = Router();

router.use('/payments', paymentRoutes);

router.use('/webhooks/payment', webhookRoutes);

router.use('/health', healthRoutes);

export default router;