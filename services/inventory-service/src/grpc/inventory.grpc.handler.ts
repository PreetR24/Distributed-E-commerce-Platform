import * as grpc from '@grpc/grpc-js';

import {
    getInventoryByProductId
} from '../repositories/inventory.repository';
import { grpcRequestCounter, grpcRequestDuration } from '@shared/common/metrics';

export const checkInventoryHandler =
    async (
        call: any,
        callback: any
    ) => {

        const endTimer = grpcRequestDuration.startTimer({
            service: "inventory-service",
            method: "CheckInventory"
        });

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

            grpcRequestCounter.inc({
                caller: "grpc",
                service: "inventory-service",
                method: "CheckInventory",
                status: "SUCCESS"
            });

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

            grpcRequestCounter.inc({
                caller: "grpc",
                service: "inventory-service",
                method: "CheckInventory",
                status: "FAILED"
            });

            callback({
                code:
                    grpc.status.INTERNAL,
                message:
                    'Inventory check failed'
            });
        } finally {
            endTimer();
        }
    };