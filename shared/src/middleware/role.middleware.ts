import {
    Request,
    Response,
    NextFunction
}
from 'express';

export const requireRole =
(
    ...roles: string[]
) => {

    return (
        req: Request,
        res: Response,
        next: NextFunction
    ) => {

        const role =
            req.headers[
                'x-user-role'
            ] as string;

        if (
            !role ||
            !roles.includes(role)
        ) {

            return res.status(403).json({
                success: false,
                message:
                    'Forbidden'
            });
        }

        next();
    };
};