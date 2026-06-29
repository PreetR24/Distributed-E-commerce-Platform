import { Router } from 'express';

import { authenticate } from '@middleware/auth.middleware';

import { authorize } from '@middleware/authorize.middleware';

import { UserRole, asyncHandler } from '@shared/common';

import { getAllUsersController, updateUserController, deleteUserController } from '@controllers/user.controller';

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

router.put(
    '/:id',
    authenticate,
    authorize(UserRole.ADMIN),
    asyncHandler(updateUserController)
);

router.delete(
    '/:id',
    authenticate,
    authorize(UserRole.ADMIN),
    asyncHandler(deleteUserController)
);

export default router;