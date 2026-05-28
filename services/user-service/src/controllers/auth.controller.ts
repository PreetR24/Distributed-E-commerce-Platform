import { Request, Response } from 'express';

import jwt from 'jsonwebtoken';

import {
    registerUser,
    loginUser
} from '@services/auth.service';

import {
    generateAccessToken
} from '@utils/jwt';

export const registerController = async (
    req: Request,
    res: Response
) => {

    const {
        name,
        email,
        password
    } = req.body;

    const user = await registerUser(
        name,
        email,
        password
    );

    return res.status(201).json({
        success: true,
        data: user
    });
};

export const loginController = async (
    req: Request,
    res: Response
) => {
    const {
        email,
        password
    } = req.body;

    const tokens = await loginUser(
        email,
        password
    );

    return res.status(200).json({
        success: true,
        data: tokens
    });
};

export const refreshTokenController = async (
    req: Request,
    res: Response
) => {

    const { refreshToken } = req.body;

    if (!refreshToken) {
        return res.status(401).json({
            success: false,
            message: 'Refresh token required'
        });
    }

    try {

        const decoded = jwt.verify(
            refreshToken,
            process.env.JWT_REFRESH_SECRET!
        ) as {
            userId: string;
            role: string;
        };

        const accessToken =
            generateAccessToken({
                userId: decoded.userId,
                role: decoded.role
            });

        return res.status(200).json({
            success: true,
            data: {
                accessToken
            }
        });

    }
    catch (error) {

        return res.status(401).json({
            success: false,
            message: 'Invalid refresh token'
        });
    }
};