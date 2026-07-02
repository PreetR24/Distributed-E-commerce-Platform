import {

    Router

}
from 'express';

import {

    healthController,
    livenessController,
    readinessController

}
from '@controllers/health.controler';

const router =
    Router();

router.get(
    '/',
    healthController
);

router.get(
    '/live',
    livenessController
);

router.get(
    '/ready',
    readinessController
);

export default router;