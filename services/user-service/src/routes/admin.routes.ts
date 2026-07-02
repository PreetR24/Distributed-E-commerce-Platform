import { Router } from 'express';

import { authenticate } from '@middleware/auth.middleware';

import { UserRole, asyncHandler, requireRole } from '@shared/common';

import { getAllUsersController, updateUserController, deleteUserController } from '@controllers/user.controller';

const router = Router();

router.get(
    '/',
    authenticate,
    requireRole(UserRole.ADMIN),
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
    requireRole(
        UserRole.ADMIN,
    ),
    asyncHandler(getAllUsersController)
);

router.put(
    '/:id',
    authenticate,
    requireRole(UserRole.ADMIN),
    asyncHandler(updateUserController)
);

router.delete(
    '/:id',
    authenticate,
    requireRole(UserRole.ADMIN),
    asyncHandler(deleteUserController)
);

export default router;