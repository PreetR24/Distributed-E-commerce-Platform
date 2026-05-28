import { Router } from 'express';

import {
    registerController,
    loginController,
    refreshTokenController
}
from '@controllers/auth.controller';

import { asyncHandler }
from '@shared/common';

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
    asyncHandler(refreshTokenController)
);

export default router;