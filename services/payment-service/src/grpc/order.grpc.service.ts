import {
    orderClient
}
from './order.grpc.client';

export const getOrderById =
(
    orderId: string
): Promise<any> => {

    return new Promise(
        (
            resolve,
            reject
        ) => {

            orderClient
                .GetOrderById(
                    {
                        orderId
                    },
                    (
                        error: any,
                        response: any
                    ) => {

                        if (error) {

                            reject(error);

                            return;
                        }

                        resolve(response);
                    }
                );
        }
    );
};