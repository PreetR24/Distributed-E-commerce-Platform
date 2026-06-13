import { Router } from 'express';

import productRoutes from '@routes/product.routes';

import categoryRoutes from '@routes/category.routes';

import healthRoutes from '@routes/health.routes';

const router = Router();

router.use('/products', productRoutes);

router.use('/categories', categoryRoutes);

router.use('/health', healthRoutes);

export default router;