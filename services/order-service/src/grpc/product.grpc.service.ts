import {
    productClient
}
from './product.grpc.client';

import {
    logger
} from '@shared/common';

export const getProductById =
(
    productId: string
): Promise<any> => {

    return Promise.race([

        new Promise(
            (
                resolve,
                reject
            ) => {

                productClient
                    .GetProductById(
                        {
                            id: productId
                        },
                        (
                            error: any,
                            response: any
                        ) => {

                            if (error) {

                                logger.error(
                                    `gRPC Product Fetch Failed: ${productId}`
                                );

                                reject(error);

                                return;
                            }

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

                        reject(
                            new Error(
                                'Product Service Timeout'
                            )
                        );

                    },
                    3000
                );
            }
        )
    ]);
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