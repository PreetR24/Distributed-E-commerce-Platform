import {
    getOrderById
}
from '@repositories/order.repository';
import { grpcRequestCounter, grpcRequestDuration } from '@shared/common/metrics';

import * as grpc from '@grpc/grpc-js';

export const getOrderByIdHandler =
async (
    call: any,
    callback: any
) => {
    const endTimer = grpcRequestDuration.startTimer({
        service: "order-service",
        method: "GetOrderById"
    });

    try{      
        const order =
            await getOrderById(
                call.request.orderId
            );
            
            if (!order) {
                
                callback(
                    new Error(
                    'Order not found'
                ),
                null
            );
            
            return;
        }
        
        grpcRequestCounter.inc({
            caller: "grpc-server",
            service: "order-service",
            method: "GetOrderById",
            status: "SUCCESS"
        }); 
        
        callback(
            null,
            {
                id: order.id,
                userId: order.userId,
                status: order.status,
                totalAmount: order.totalAmount
            }
        );

    } catch (error) {
        grpcRequestCounter.inc({
            caller: "grpc-server",
            service: "order-service",
            method: "GetOrderById",
            status: "FAILED"
        });

        callback({
            code: grpc.status.INTERNAL,
            message: "Failed to fetch order"
        });
    }
    finally {
        endTimer();
    }
};