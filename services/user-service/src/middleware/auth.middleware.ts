import { Request, Response, NextFunction } from 'express';

import jwt from 'jsonwebtoken';

export const authenticate = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    console.time('auth-middleware');

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
        console.time('jwt-verify');

        const decoded = jwt.verify(
            token,
            process.env.JWT_ACCESS_SECRET!
        ) as {
            userId: string;
            role: string;
        };
        console.timeEnd('jwt-verify');

        req.user = {
            userId: decoded.userId,
            role: decoded.role as any
        };

        next();
        console.timeEnd('auth-middleware');

    }
    catch (error) {

        return res.status(401).json({
            success: false,
            message: 'Invalid or expired token'
        });
    }
};