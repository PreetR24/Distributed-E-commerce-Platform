import * as grpc from '@grpc/grpc-js';

import {
    getInventoryByProductId
} from '../repositories/inventory.repository';

export const checkInventoryHandler =
    async (
        call: any,
        callback: any
    ) => {

        try {

            const inventory =
                await getInventoryByProductId(
                    call.request.productId
                );

            if (!inventory) {

                return callback(
                    null,
                    {
                        available: false,
                        availableStock: 0
                    }
                );
            }

            callback(
                null,
                {
                    available:
                        inventory.availableStock >=
                        call.request.quantity,

                    availableStock:
                        inventory.availableStock
                }
            );

        } catch (error) {

            callback({
                code:
                    grpc.status.INTERNAL,
                message:
                    'Inventory check failed'
            });
        }
    };