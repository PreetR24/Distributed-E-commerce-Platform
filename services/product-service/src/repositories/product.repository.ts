import { prisma } from '@config/prisma';

export const createProduct = async (
    data: {
        name: string;
        description: string;
        price: number;
        stock: number;
        categoryId: string;
    }
) => {

    return prisma.product.create({
        data,
        include: {
            category: true
        }
    });
};

export const getProducts = async (
    page: number,
    limit: number,
    search?: string
) => {

    const skip = (page - 1) * limit;

    return prisma.product.findMany({
        skip,
        take: limit,
        where: {
            name: {
                contains: search,
                mode: 'insensitive'
            }
        },
        include: {
            category: true
        },
        orderBy: {
            createdAt: 'desc'
        }
    });
};