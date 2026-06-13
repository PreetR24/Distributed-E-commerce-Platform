import { Router } from 'express';

import { systemHealthController } from '@controllers/system-health.controller';

const router = Router();

router.get(
    '/',
    systemHealthController
);

export default router;