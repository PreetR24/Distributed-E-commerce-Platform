import { Router } from 'express';

import { authenticate } from '@middleware/auth.middleware';

import { authorize } from '@middleware/authorize.middleware';

import { UserRole, asyncHandler } from '@shared/common';

import { getAllUsersController } from '@controllers/user.controller';

const router = Router();

router.get(
    '/',
    authenticate,
    authorize(UserRole.ADMIN),
    (_req, res) => {

        return res.status(200).json({
            success: true,
            message: 'Admin route accessed'
        });
    }
);

router.get(
    '/all-users',
    authenticate,
    authorize(UserRole.ADMIN),
    asyncHandler(getAllUsersController)
);

export default router;