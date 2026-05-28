import { Router } from 'express';

import cartRoutes from '@routes/cart.routes';

const router = Router();

router.use('/cart', cartRoutes);

export default router;