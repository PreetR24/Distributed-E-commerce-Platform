import { prisma } from '@config/prisma';

import { SearchQuery }
from '@interfaces/search.interface';

export const upsertSearchProduct =
async (
    product: any
) => { 

    return prisma.productSearch.upsert({

        where: {
            id: product.id
        },

        create: {
            id: product.id,
            name: product.name,
            description: product.description,
            price: product.price,
            isActive: product.isActive,
            categoryId: product.categoryId,
            categoryName: product.category.name,
            createdAt: new Date(product.createdAt),
            updatedAt: new Date(product.updatedAt)
        },

        update: {
            name: product.name,
            description: product.description,
            price: product.price,
            isActive: product.isActive,
            categoryId: product.categoryId,
            categoryName: product.category.name,
            updatedAt: new Date(product.updatedAt)
        }
    });
};

export const searchProducts =
async (
    query: SearchQuery
) => {

    const {
        search,
        categoryId,
        minPrice,
        maxPrice,
        page,
        limit,
        sortBy = 'createdAt',
        sortOrder = 'desc',
        isActive
    } = query;

    const whereClause = {
        ...(search
            ? {
                OR: [
                    {
                        name: {
                            contains: search,
                            mode: 'insensitive' as const
                        }
                    },
                    {
                        description: {
                            contains: search,
                            mode: 'insensitive' as const
                        }
                    }
                ]
            }
            : {}),
        ...(categoryId
            ? {
                categoryId
            }
            : {}),
        ...(typeof isActive === 'boolean'
            ? {
                isActive
            }
            : {}),
        ...(minPrice !== undefined ||
        maxPrice !== undefined
            ? {
                price: {

                    ...(minPrice !== undefined
                        ? { gte: minPrice }
                        : {}),

                    ...(maxPrice !== undefined
                        ? { lte: maxPrice }
                        : {})
                }
            }
            : {})
    };

    const [products, total] =
        await Promise.all([
            prisma.productSearch.findMany({
                where: whereClause,
                orderBy: {
                    [sortBy]: sortOrder
                },
                skip:
                    (page - 1) * limit,

                take:
                    limit
            }),
            prisma.productSearch.count({
                where: whereClause
            })
        ]);

    return {
        products,
        pagination: {
            total,
            page,
            limit,
            totalPages:
                Math.ceil(
                    total / limit
                )
        }
    };
};

export const rebuildProjection =
async (
    products: any[]
) => {

    await prisma.productSearch.deleteMany();

    await prisma.productSearch.createMany({

        data: products.map(
            (
                product
            ) => ({

                id:
                    product.id,

                name:
                    product.name,

                description:
                    product.description,

                price:
                    product.price,

                isActive:
                    product.isActive,

                categoryId:
                    product.categoryId,

                categoryName:
                    product.category.name,

                createdAt:
                    product.createdAt,

                updatedAt:
                    product.updatedAt
            })
        )
    });
};