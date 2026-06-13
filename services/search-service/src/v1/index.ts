import { Router }
from 'express';

import searchRoutes
from '@routes/search.routes';

import healthRoutes from '@routes/health.routes';

const router = Router();

router.use(
    '/search',
    searchRoutes
);

router.use('/health', healthRoutes);

export default router;