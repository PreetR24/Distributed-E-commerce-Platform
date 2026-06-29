import {
    inventoryClient
} from './inventory.grpc.client';

export const checkInventory =
    (
        productId: string,
        quantity: number
    ) =>
        new Promise<any>(
            (
                resolve,
                reject
            ) => {

                inventoryClient.CheckInventory(
                    {
                        productId,
                        quantity
                    },

                    (
                        error: any,
                        response: any
                    ) => {

                        if (error) {
                            return reject(error);
                        }

                        resolve(response);
                    }
                );
            }
        );