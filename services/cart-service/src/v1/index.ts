import { Router } from 'express';

import cartRoutes from '@routes/cart.routes';
import healthRoutes from '@routes/health.routes';

const router = Router();

router.use('/cart', cartRoutes);

router.use('/health', healthRoutes);

export default router;