import { Router } from 'express';

import {
    registerController,
    loginController,
    logoutController,
    logoutAllDevicesController,
    refreshTokenController
}
from '@controllers/auth.controller';

import { asyncHandler, authenticateRequest } from '@shared/common';

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
    '/logout',
    authenticateRequest,
    asyncHandler(logoutController)
);

router.post(
    '/logout-all',
    authenticateRequest,
    asyncHandler(logoutAllDevicesController)
);

router.post(
    '/refresh-token',
    authenticateRequest,
    asyncHandler(refreshTokenController)
);

export default router;