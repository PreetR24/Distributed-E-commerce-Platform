import {
    productClient
}
from './product.grpc.client';

import {
    logger
} from '@shared/common';

import {
    grpcRequestCounter,
    grpcRequestDuration
} from "@shared/common/metrics";

export const getProductById =
async (
    productId: string
): Promise<any> => {

    const endTimer =
        grpcRequestDuration.startTimer({

            service: "product-service",

            method: "GetProductById"

        });

    try {

        const response =
            await Promise.race([

                new Promise(

                    (
                        resolve,
                        reject
                    ) => {

                        productClient.GetProductById(

                            {
                                id: productId
                            },

                            (
                                error: any,
                                response: any
                            ) => {

                                if (error) {

                                    grpcRequestCounter.inc({
                                        caller: "order-service",

                                        service: "product-service",

                                        method: "GetProductById",

                                        status: "FAILED"

                                    });

                                    logger.error(

                                        `gRPC Product Fetch Failed: ${productId}`

                                    );

                                    return reject(error);

                                }

                                grpcRequestCounter.inc({
                                    caller: "order-service",

                                    service: "product-service",

                                    method: "GetProductById",

                                    status: "SUCCESS"

                                });

                                resolve(response);

                            }

                        );

                    }

                ),

                new Promise(

                    (
                        _,
                        reject
                    ) => {

                        setTimeout(

                            () => {

                                grpcRequestCounter.inc({
                                    caller: "order-service",

                                    service: "product-service",

                                    method: "GetProductById",

                                    status: "FAILED"

                                });

                                reject(

                                    new Error(

                                        "Product Service Timeout"

                                    )

                                );

                            },

                            3000

                        );

                    }

                )

            ]);

        return response;

    }

    finally {

        endTimer();

    }

};

export const getProductByIdWithRetry =
async (
    productId: string,
    retries = 3
) => {

    let lastError;

    for (
        let i = 0;
        i < retries;
        i++
    ) {

        try {

            return await getProductById(
                productId
            );

        } catch (error) {

            lastError = error;

            await new Promise(
                resolve =>
                    setTimeout(
                        resolve,
                        1000
                    )
            );
        }
    }

    throw lastError;
};