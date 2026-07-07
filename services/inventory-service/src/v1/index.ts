import { Router }
from 'express';

import inventoryRoutes
from '@routes/inventory.routes';
import healthRoutes
from '@routes/health.routes';
import { authenticateRequest } from '@shared/common';

const router = Router();

router.use(
    '/inventory',
    authenticateRequest,
    inventoryRoutes
);

router.use('/health', healthRoutes);

export default router;