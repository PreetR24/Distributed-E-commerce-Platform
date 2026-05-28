import { Router } from 'express';

import baseRoutes from '../routes/base.routes';
import healthRoutes from '../routes/health.routes';

const router = Router();

router.use('/', baseRoutes);

router.use('/health', healthRoutes);

export default router;