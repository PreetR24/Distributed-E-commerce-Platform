import { logger } from '@shared/common';
import { Request, Response, NextFunction } from 'express';

export const authorize = (
    ...roles: string[]
) => {

    return (
        req: Request,
        res: Response,
        next: NextFunction
    ) => {

        if (!req.user) {

            return res.status(401).json({
                success: false,
                message: 'Unauthorized'
            });
        }

        if (!roles.includes(req.user.role)) {

            logger.warn(
                `Authorization Failed: User Role ${req.user.role} Not Allowed`
            );

            return res.status(403).json({
                success: false,
                message: 'Forbidden'
            });
        }

        next();
    };
};