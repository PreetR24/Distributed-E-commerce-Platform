import {
    createProduct,
    getProducts,
    updateProduct,
    getProductById,
    getAllProducts
} from '@repositories/product.repository';

import {
    getCache,
    setCache,
    deleteCache,
    AppError,
    publishEvent,
    EXCHANGES,
    QUEUES
} from '@shared/common';

import {
    PRODUCT_CACHE_KEYS
} from '@cache/product-cache.keys';

export const createProductService = async (
    data: {
        name: string;
        description: string;
        price: number;
        categoryId: string;
    }
) => {

    const createdProduct = await createProduct(data);

    await publishEvent(
        EXCHANGES.PRODUCT_EVENTS,
        '',
        {
            event: QUEUES.PRODUCT_CREATED,

            product: {

                id: createdProduct.id,

                name: createdProduct.name,

                description: createdProduct.description,

                price: createdProduct.price,

                isActive: createdProduct.isActive,

                categoryId: createdProduct.categoryId,

                categoryName:
                    createdProduct.category.name,

                createdAt:
                    createdProduct.createdAt,

                updatedAt:
                    createdProduct.updatedAt
            }
        }
    );
};

export const getProductsService =
async (
    page: number,
    limit: number,
    search?: string
) => {

    const cacheKey =
        PRODUCT_CACHE_KEYS
            .PRODUCT_LIST(
                page,
                limit,
                search
            );

    const cachedProducts =
        await getCache(
            cacheKey
        );

    if (cachedProducts) {

        console.log(
            'CACHE HIT:',
            cacheKey
        );

        return JSON.parse(
            cachedProducts
        );
    }

    console.log(
        'CACHE MISS:',
        cacheKey
    );

    const products =
        await getProducts(
            page,
            limit,
            search
        );

    await setCache(
        cacheKey,
        products,
        300
    );

    return products;
};

export const getSingleProductService =
async (
    productId: string
) => {

    const cacheKey =
        PRODUCT_CACHE_KEYS
            .SINGLE_PRODUCT(
                productId
            );

    const cachedProduct =
        await getCache(
            cacheKey
        );

    if (cachedProduct) {

        console.log(
            'CACHE HIT:',
            cacheKey
        );

        return JSON.parse(
            cachedProduct
        );
    }

    console.log(
        'CACHE MISS:',
        cacheKey
    );

    const product =
        await getProductById(
            productId
        );

    if (!product) {

        throw new AppError(
            'PRODUCT_NOT_FOUND',
            404,
            'Product not found'
        );
    }

    await setCache(
        cacheKey,
        product,
        300
    );

    return product;
};

export const updateProductService =
async (
    productId: string,
    payload: any
) => {

    const updatedProduct =
        await updateProduct(
            productId,
            payload
        );

    await deleteCache(
        PRODUCT_CACHE_KEYS
            .SINGLE_PRODUCT(
                productId
            )
    );

    console.log(
        'CACHE INVALIDATED:',
        productId
    );

    await publishEvent(
        EXCHANGES.PRODUCT_EVENTS,
        '',
        {
            event: QUEUES.PRODUCT_UPDATED,

            product: updatedProduct
        }
    );

    return updatedProduct;
};

export const getAllProductsService =
async () => {

    return getAllProducts();
};