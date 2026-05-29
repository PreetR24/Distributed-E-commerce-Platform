import {
    createProduct,
    getProducts,
    updateProduct,
    getProductById
} from '@repositories/product.repository';

import {
    getCache,
    setCache,
    deleteCache,
    AppError
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

    return createProduct(data);
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

    return updatedProduct;
};