import {
    getSingleProductService,
    getAllProductsService
} from '../services/product.service';

import * as grpc from '@grpc/grpc-js';

export const getProductByIdHandler =
    async (
        call: any,
        callback: any
    ) => {

        try {

            const product =
                await getSingleProductService(
                    call.request.id
                );

            callback(
                null,
                {
                    id: product.id,
                    name: product.name,
                    description:
                        product.description,
                    price: product.price,
                    isActive:
                        product.isActive,
                    categoryId:
                        product.categoryId,
                    categoryName: product.category.name,
                    createdAt: product.createdAt.toISOString(),
                    updatedAt: product.updatedAt.toISOString()
                }
            );

        } catch (error) {

            callback({
                code: grpc.status.NOT_FOUND,
                message: 'Product not found'
            });
        }
    };

export const getAllProductsHandler =
async (
    _call: any,
    callback: any
) => {

    try {

        const products =
            await getAllProductsService();

        callback(
            null,
            {
                products: products.map(product => ({
                    id: product.id,
                    name: product.name,
                    description: product.description,
                    price: product.price,
                    isActive: product.isActive,
                    categoryId: product.categoryId,
                    categoryName: product.category.name,
                    createdAt: product.createdAt.toISOString(),
                    updatedAt: product.updatedAt.toISOString()
                }))
            }
        );

    } catch (error) {

        callback(error);
    }
};