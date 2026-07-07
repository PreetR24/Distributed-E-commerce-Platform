import crypto from "crypto";

import { prisma } from "@config/prisma";

export const hashRefreshToken =
(
    token: string
) => {

    return crypto
        .createHash("sha256")
        .update(token)
        .digest("hex");
};

export const saveRefreshToken =
async (
    userId: string,
    refreshToken: string,
    expiresAt: Date,
    // deviceName?: string,
    // ipAddress?: string
) => {

    return prisma.refreshToken.create({

        data: {

            tokenHash:
                hashRefreshToken(
                    refreshToken
                ),

            expiresAt,

            userId,

            // deviceName,

            // ipAddress
        }
    });
};

export const findRefreshToken =
async (
    userId: string,
    refreshToken: string
) => {

    return prisma.refreshToken.findFirst({

        where: {

            userId,

            tokenHash:
                hashRefreshToken(
                    refreshToken
                )

        }

    });

};

export const deleteRefreshToken =
async (
    userId: string,
    refreshToken: string
) => {

    return prisma.refreshToken.deleteMany({

        where: {

            userId,

            tokenHash:
                hashRefreshToken(
                    refreshToken
                )

        }

    });

};

export const deleteAllUserRefreshTokens =
async (
    userId: string
) => {

    return prisma.refreshToken.deleteMany({

        where: {

            userId

        }

    });

};