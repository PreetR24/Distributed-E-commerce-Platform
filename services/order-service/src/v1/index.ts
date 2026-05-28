import { Router } from 'express';

import orderRoutes from '@routes/order.routes';

const router = Router();

router.use('/orders', orderRoutes);

export default router;