import { Router }
from 'express';

import inventoryRoutes
from '@routes/inventory.routes';
import healthRoutes
from '@routes/health.routes';

const router = Router();

router.use(
    '/inventory',
    inventoryRoutes
);

router.use('/health', healthRoutes);

export default router;