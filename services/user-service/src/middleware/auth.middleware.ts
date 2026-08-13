import { logger } from '@shared/common';
import { Request, Response, NextFunction } from 'express';

import jwt from 'jsonwebtoken';

export const authenticate = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const authorizationHeader = req.headers.authorization;

    if (!authorizationHeader) {
        return res.status(401).json({
            success: false,
            message: 'Authorization header missing'
        });
    }

    const token = authorizationHeader.split(' ')[1];

    if (!token) {
        return res.status(401).json({
            success: false,
            message: 'Access token missing'
        });
    }

    try {
        const decoded = jwt.verify(
            token,
            process.env.JWT_ACCESS_SECRET!
        ) as {
            userId: string;
            role: string;
        };

        req.user = {
            userId: decoded.userId,
            role: decoded.role as any
        };

        next();

    }
    catch (error) {

        logger.error(
            'Authentication Error:',
            {
                error
            }
        );

        return res.status(401).json({
            success: false,
            message: 'Invalid or expired token'
        });
    }
};