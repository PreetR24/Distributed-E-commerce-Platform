import {
    Request,
    Response,
    NextFunction
} from 'express';

import jwt from 'jsonwebtoken';

export const authenticateRequest = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const authorizationHeader =
        req.headers.authorization;

    if (!authorizationHeader) {

        return res.status(401).json({
            success: false,
            message: 'Unauthorized'
        });
    }

    const token =
        authorizationHeader.split(' ')[1];

    if (!token) {

        return res.status(401).json({
            success: false,
            message: 'Access token missing'
        });
    }

    try {

        const decoded =
            jwt.verify(
                token,
                process.env.JWT_ACCESS_SECRET!
            ) as {
                userId: string;
                role: string;
            };

        req.headers['x-user-id'] =
            decoded.userId;

        req.headers['x-user-role'] =
            decoded.role;

        next();

    }
    catch {

        return res.status(401).json({
            success: false,
            message: 'Invalid token'
        });
    }
};