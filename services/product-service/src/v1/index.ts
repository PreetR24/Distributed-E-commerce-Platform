import { Router } from 'express';

import productRoutes from '@routes/product.routes';

import categoryRoutes from '@routes/category.routes';

const router = Router();

router.use('/products', productRoutes);

router.use('/categories', categoryRoutes);

export default router;