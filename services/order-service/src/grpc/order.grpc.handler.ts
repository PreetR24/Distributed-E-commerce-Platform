import {
    getOrderById
}
from '@repositories/order.repository';

export const getOrderByIdHandler =
async (
    call: any,
    callback: any
) => {

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

    callback(
        null,
        {
            id: order.id,
            userId: order.userId,
            status: order.status,
            totalAmount: order.totalAmount
        }
    );
};