import {
    getSingleProductService
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
                        product.categoryId
                }
            );

        } catch (error) {

            callback({
                code: grpc.status.NOT_FOUND,
                message: 'Product not found'
            });
        }
    };