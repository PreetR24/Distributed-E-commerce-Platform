import { prisma } from "../config/prisma";

import { hashPassword, comparePassword } from "../utils/password";

import {
    AppError,
    logger
} from "@shared/common";

import { UserRole } from "../../generated/prisma";

import {
    generateAccessToken,
    generateRefreshToken
} from "../utils/jwt";

import ms, {
    StringValue
} from "ms";

import {
    saveRefreshToken,
    findRefreshToken,
    deleteRefreshToken,
    deleteAllUserRefreshTokens
} from "@repositories/refresh-token.repository";

import jwt from "jsonwebtoken";

export const registerUser = async (
    name: string,
    email: string,
    password: string,
    role?: UserRole
) => {

    const existingUser =
        await prisma.user.findUnique({
            where: {
                email
            }
        });

    if (existingUser) {

        logger.error(
            `Registration failed - Email already in use: ${email}`
        );

        throw new AppError(
            "User already exists",
            409,
            "A user with this email already exists. Please login instead."
        );
    }

    const hashedPassword =
        await hashPassword(password);

    const user =
        await prisma.user.create({

            data: {

                name,

                email,

                password: hashedPassword,

                role:
                    role ??
                    UserRole.CUSTOMER

            }

        });

    logger.info(
        `New User Registered: ${user.id} - ${user.email}`
    );

    return user;
};

export const loginUser = async (
    email: string,
    password: string
) => {

    const user =
        await prisma.user.findUnique({

            where: {
                email
            }

        });

    if (!user) {

        logger.error(
            `Login failed - User not found: ${email}`
        );

        throw new AppError(
            "Invalid credentials",
            401,
            "No user found with this email. Please register first."
        );
    }

    const isPasswordValid =
        await comparePassword(
            password,
            user.password
        );

    if (!isPasswordValid) {

        logger.error(
            `Login failed - Incorrect password for user: ${email}`
        );

        throw new AppError(
            "Invalid credentials",
            401,
            "Incorrect password. Please try again."
        );
    }

    const payload = {

        userId: user.id,

        role: user.role

    };

    const accessToken =
        generateAccessToken(
            payload
        );

    const refreshToken =
        generateRefreshToken(
            payload
        );

    const refreshTokenExpiry =
        process.env
            .REFRESH_TOKEN_EXPIRES_IN as StringValue;

    const expiresAt =
        new Date(

            Date.now()

            +

            ms(
                refreshTokenExpiry
            )

        );

    await saveRefreshToken(

        user.id,

        refreshToken,

        expiresAt,

        // deviceName,

        // ipAddress
    );

    logger.info(
        `User Logged In: ${user.id} - ${user.email}`
    );

    return {

        accessToken,

        refreshToken

    };
};

export const refreshAccessToken = async (
    refreshToken: string
) => {

    if (!refreshToken) {

        throw new AppError(
            "Unauthorized",
            401,
            "Refresh token required"
        );
    }

    const decoded =
        jwt.verify(

            refreshToken,

            process.env.JWT_REFRESH_SECRET!

        ) as {

            userId: string;

            role: string;

        };

    const storedToken =
        await findRefreshToken(
            decoded.userId,
            refreshToken
        );

    if (!storedToken) {

        throw new AppError(
            "Unauthorized",
            401,
            "Refresh token not found"
        );
    }

    if (
        storedToken.expiresAt <
        new Date()
    ) {

        await deleteRefreshToken(
            decoded.userId,
            refreshToken
        );

        throw new AppError(
            "Unauthorized",
            401,
            "Refresh token expired"
        );
    }

    await deleteRefreshToken(
        decoded.userId,
        refreshToken
    );

    const payload = {

        userId:
            decoded.userId,

        role:
            decoded.role

    };

    const accessToken =
        generateAccessToken(
            payload
        );

    const newRefreshToken =
        generateRefreshToken(
            payload
        );

    const refreshTokenExpiry =
        process.env
            .REFRESH_TOKEN_EXPIRES_IN as StringValue;

    const expiresAt =
        new Date(

            Date.now()

            +

            ms(
                refreshTokenExpiry
            )

        );

    await saveRefreshToken(

        decoded.userId,

        newRefreshToken,

        expiresAt

    );

    logger.info({

        event:
            "TOKEN_REFRESHED",

        userId:
            decoded.userId

    });

    return {

        accessToken,

        refreshToken:
            newRefreshToken

    };
};

export const logoutUser = async (
    userId: string,
    refreshToken: string
) => {

    if (!refreshToken) {

        throw new AppError(
            "Bad Request",
            400,
            "Refresh token required"
        );
    }

    const storedToken =
        await findRefreshToken(
            userId,
            refreshToken
        );

    if (!storedToken) {

        throw new AppError(
            "Unauthorized",
            401,
            "Refresh token not found"
        );
    }

    await deleteRefreshToken(
        userId,
        refreshToken
    );

    logger.info({

        event:
            "LOGOUT"

    });

};

export const logoutAllDevices = async (
    userId: string
) => {

    await deleteAllUserRefreshTokens(
        userId
    );

    logger.info({

        event:
            "LOGOUT_ALL",

        userId

    });

};