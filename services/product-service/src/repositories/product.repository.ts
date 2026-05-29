import { prisma } from '@config/prisma';

export const createProduct = async (
    data: {
        name: string;
        description: string;
        price: number;
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
        where: search
            ? {
                name: {
                    contains: search,
                    mode: 'insensitive'
                }
            }
            : undefined,

        skip,

        take: limit,

        include: {
            category: true
        }
    });
};

export const getProductById = async (
    productId: string
) => {

    return prisma.product.findUnique({
        where: {
            id: productId
        },
        include: {
            category: true
        }
    });
};

export const updateProduct = async (
    productId: string,
    payload: {
        name?: string;
        description?: string;
        price?: number;
        imageUrl?: string;
        categoryId?: string;
        isActive?: boolean;
    }
) => {

    return prisma.product.update({
        where: {
            id: productId
        },
        data: payload,
        include: {
            category: true
        }
    });
};