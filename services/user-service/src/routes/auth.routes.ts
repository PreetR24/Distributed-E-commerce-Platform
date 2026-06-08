import { Router } from 'express';

import {
    registerController,
    loginController,
    refreshTokenController
}
from '@controllers/auth.controller';

import { asyncHandler }
from '@shared/common';
import { authenticate } from '@middleware/auth.middleware';

const router = Router();

router.post(
    '/register',
    asyncHandler(registerController)
);

router.post(
    '/login',
    asyncHandler(loginController)
);

router.post(
    '/refresh-token',
    authenticate,
    asyncHandler(refreshTokenController)
);

export default router;