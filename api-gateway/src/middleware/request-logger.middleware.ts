import { Request, Response, NextFunction } from 'express';

import { logger } from '@shared/common';

export const requestLogger = (
    req: Request,
    _res: Response,
    next: NextFunction
) => {
    logger.info({
        method: req.method,
        url: req.originalUrl
    });

    next();
};