import {
    productClient
}
from './product.grpc.client';

export const getAllProducts =
() => {

    return new Promise<any[]>(

        (
            resolve,
            reject
        ) => {

            productClient.GetAllProducts(

                {},

                (
                    error: any,
                    response: any
                ) => {

                    if (error) {

                        return reject(error);
                    }

                    resolve(
                        response.products
                    );
                }
            );
        }
    );
};