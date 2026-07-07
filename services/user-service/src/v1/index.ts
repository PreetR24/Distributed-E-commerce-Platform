import { Router } from 'express';

import authRoutes from '@routes/auth.routes';

import userRoutes from '@routes/user.routes';

import adminRoutes from '@routes/admin.routes';

import healthRoutes from '@routes/health.routes';
import { authenticateRequest } from '@shared/common';

const router = Router();

router.use('/auth', authRoutes);

router.use('/users', authenticateRequest, userRoutes);

router.use('/admin', authenticateRequest, adminRoutes);

router.use('/health', healthRoutes);

export default router;