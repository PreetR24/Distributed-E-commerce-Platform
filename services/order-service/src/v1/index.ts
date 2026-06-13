import { Router } from 'express';

import orderRoutes from '@routes/order.routes';
import healthRoutes from '@routes/health.routes';

const router = Router();

router.use('/orders', orderRoutes);

router.use('/health', healthRoutes);

export default router;