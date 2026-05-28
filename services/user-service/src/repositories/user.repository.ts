import { prisma } from '@config/prisma';

export const findUserByEmail = async (
    email: string
) => {
    return prisma.user.findUnique({
        where: {
            email
        }
    });
};

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