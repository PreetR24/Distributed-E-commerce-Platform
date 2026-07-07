import { Request, Response } from "express";

import {
    registerUser,
    loginUser,
    refreshAccessToken,
    logoutUser,
    logoutAllDevices
} from "@services/auth.service";

import { UserRole } from "../../generated/prisma";

export const registerController = async (
    req: Request,
    res: Response
) => {

    const {
        name,
        email,
        password,
        role
    } = req.body;

    const user = await registerUser(
        name,
        email,
        password,
        role as UserRole
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

    const {
        refreshToken
    } = req.body;

    const tokens =
        await refreshAccessToken(
            refreshToken
        );

    return res.status(200).json({
        success: true,
        data: tokens
    });
};

export const logoutController = async (
    req: Request,
    res: Response
) => {

    const {
        refreshToken
    } = req.body;

    await logoutUser(
        req.headers["x-user-id"] as string,
        refreshToken
    );

    return res.status(200).json({
        success: true,
        message: "Logged out successfully"
    });
};

export const logoutAllDevicesController = async (
    req: Request,
    res: Response
) => {

    await logoutAllDevices(
        req.headers[
            "x-user-id"
        ] as string
    );

    return res.status(200).json({
        success: true,
        message: "Logged out from all devices successfully"
    });
};