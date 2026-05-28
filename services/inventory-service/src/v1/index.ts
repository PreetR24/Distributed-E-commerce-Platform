import { Router }
from 'express';

import inventoryRoutes
from '@routes/inventory.routes';

const router = Router();

router.use(
    '/inventory',
    inventoryRoutes
);

export default router;