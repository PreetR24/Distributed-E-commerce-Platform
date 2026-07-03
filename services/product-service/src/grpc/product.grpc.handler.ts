import { grpcRequestCounter, grpcRequestDuration } from '@shared/common/metrics';
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

        const endTimer = grpcRequestDuration.startTimer({
            service: "product-service",
            method: "GetProductById"
        });

        try {

            const product =
                await getSingleProductService(
                    call.request.id
                );

            grpcRequestCounter.inc({
                caller: "grpc-server",
                service: "product-service",
                method: "GetProductById",
                status: "SUCCESS"
            });

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
            grpcRequestCounter.inc({
                caller: "grpc-server",
                service: "product-service",
                method: "GetProductById",
                status: "FAILED"
            });

            callback({
                code: grpc.status.NOT_FOUND,
                message: 'Product not found'
            });

        } finally {
            endTimer();
        }
    };

export const getAllProductsHandler =
async (
    _call: any,
    callback: any
) => {

    const endTimer = grpcRequestDuration.startTimer({
        service: "product-service",
        method: "GetAllProducts"
    });

    try {

        const products =
            await getAllProductsService();

        grpcRequestCounter.inc({
            caller: "grpc-server",
            service: "product-service",
            method: "GetAllProducts",
            status: "SUCCESS"
        });

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

        grpcRequestCounter.inc({
            caller: "grpc-server",
            service: "product-service",
            method: "GetAllProducts",
            status: "FAILED"
        });

        callback({
            code: grpc.status.INTERNAL,
            message: "Failed to fetch order"
        });
    } finally{
        endTimer();
    }
};