import { prisma } from '@config/prisma';
import { UserRole, AppError, logger } from '@shared/common';

export const getAllUsers = async () => {
    return prisma.user.findMany();
}

export const findUserById = async (
    userId: string
) => {
    return prisma.user.findUnique({
        where: {
            id: userId
        }
    });
};

export const createUser = async (
    data: {
        name: string;
        email: string;
        password: string;
    }
) => {
    return prisma.user.create({
        data
    });
};

export const findUserByEmail = (
    email: string
) => {
    return prisma.user.findUnique({
        where: { email }
    });
};

export const updateUserById = (
    userId: string,
    data: {
        name?: string;
        email?: string;
        role?: UserRole;
    }
) => {
    return prisma.user.update({
        where: {
            id: userId
        },
        data: {
            name: data.name,
            email: data.email,
            role: data.role as any
        }
    });
};

export const deleteUserById = (
    userId: string
) => {
    return prisma.user.delete({
        where: {
            id: userId
        }
    });
};