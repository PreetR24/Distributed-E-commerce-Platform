import { prisma } from '../config/prisma';

import { hashPassword, comparePassword } from '../utils/password';
import { AppError }
from '@shared/common';

import { generateAccessToken, generateRefreshToken } from '../utils/jwt';

export const registerUser = async (
    name: string,
    email: string,
    password: string
) => {

    const existingUser = await prisma.user.findUnique({
        where: {
            email
        }
    });

    if (existingUser) {
        throw new AppError(
            'User already exists',
            409
        );
    }

    const hashedPassword = await hashPassword(password);

    const user = await prisma.user.create({
        data: {
            name,
            email,
            password: hashedPassword
        }
    });

    return user;
};

export const loginUser = async (
    email: string,
    password: string
) => {

    const user = await prisma.user.findUnique({
        where: {
            email
        }
    });

    if (!user) {
        throw new AppError(
            'Invalid credentials',
            401
        );
    }

    const isPasswordValid = await comparePassword(
        password,
        user.password
    );

    if (!isPasswordValid) {
        throw new AppError(
            'Invalid credentials',
            401
        );
    }

    const payload = {
        userId: user.id,
        role: user.role
    };

    return {
        accessToken: generateAccessToken(payload),
        refreshToken: generateRefreshToken(payload)
    };
};