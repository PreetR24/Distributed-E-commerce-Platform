import { Request, Response } from 'express';

import { successResponse } from '@shared/common';

import { getHealthStatus } from '../services/health.service';

export const healthCheckController = (
    _req: Request,
    res: Response
) => {
    const data = getHealthStatus();

    return res.status(200).json(
        successResponse(
            'Health check successful',
            data
        )
    );
};