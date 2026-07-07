import { Router } from 'express';

import cartRoutes from '@routes/cart.routes';
import healthRoutes from '@routes/health.routes';
import { authenticateRequest } from '@shared/common';

const router = Router();

router.use('/cart', authenticateRequest, cartRoutes);

router.use('/health', healthRoutes);

export default router;