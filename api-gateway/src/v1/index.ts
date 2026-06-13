import { Router } from 'express';

import baseRoutes from '../routes/base.routes';
import healthRoutes from '../routes/health.routes';
import systemRoutes from '../routes/system-health.routes';

const router = Router();

router.use('/', baseRoutes);

router.use('/health', healthRoutes);

router.use('/system/health', systemRoutes);

export default router;