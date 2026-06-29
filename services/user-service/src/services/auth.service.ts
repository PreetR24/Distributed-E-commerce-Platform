import { prisma } from '../config/prisma';

import { hashPassword, comparePassword } from '../utils/password';
import { AppError, logger }
from '@shared/common';

import { UserRole } from '../../generated/prisma';

import { generateAccessToken, generateRefreshToken } from '../utils/jwt';

export const registerUser = async (
    name: string,
    email: string,
    password: string,
    role?: UserRole
) => {

    const existingUser = await prisma.user.findUnique({
        where: {
            email
        }
    });

    if (existingUser) {
        logger.error(
            `Registration failed - Email already in use: ${email}`
        );

        throw new AppError(
            'User already exists',
            409,
            "A user with this email already exists. Please login instead."
        );
    }

    const hashedPassword = await hashPassword(password);

    const user = await prisma.user.create({
        data: {
            name,
            email,
            password: hashedPassword,
            role: role ?? UserRole.CUSTOMER
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

    const user = await prisma.user.findUnique({
        where: {
            email
        }
    });

    if (!user) {
        logger.error(
            `Login failed - User not found: ${email}`
        );
        throw new AppError(
            'Invalid credentials',
            401,
            "No user found with this email. Please register first."
        );
    }

    const isPasswordValid = await comparePassword(
        password,
        user.password
    );

    if (!isPasswordValid) {
        logger.error(
            `Login failed - Incorrect password for user: ${email}`
        );
        
        throw new AppError(
            'Invalid credentials',
            401,
            "Incorrect password. Please try again."
        );
    }

    const payload = {
        userId: user.id,
        role: user.role
    };

    logger.info(
        `User Logged In: ${user.id} - ${user.email}`
    );

    return {
        accessToken: generateAccessToken(payload),
        refreshToken: generateRefreshToken(payload)
    };
};