import { Router } from 'express';

import paymentRoutes from '@routes/payment.routes';

import webhookRoutes from '@routes/webhook.routes';

const router = Router();

router.use('/payments', paymentRoutes);

router.use('/webhooks/payment', webhookRoutes);

export default router;