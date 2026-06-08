import {
    Request,
    Response,
    NextFunction
} from 'express';

export const requireRole =
(
    ...allowedRoles: string[]
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

        if (!role) {

            return res.status(403).json({
                success: false,
                message:
                    'Role not found'
            });
        }

        if (
            !allowedRoles.includes(
                role
            )
        ) {

            return res.status(403).json({
                success: false,
                message:
                    'Insufficient permissions'
            });
        }

        next();
    };
};