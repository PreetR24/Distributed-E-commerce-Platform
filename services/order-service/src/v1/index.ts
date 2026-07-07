import { Router } from 'express';

import orderRoutes from '@routes/order.routes';
import healthRoutes from '@routes/health.routes';
import { authenticateRequest } from '@shared/common';

const router = Router();

router.use('/orders', authenticateRequest, orderRoutes);

router.use('/health', healthRoutes);

export default router;