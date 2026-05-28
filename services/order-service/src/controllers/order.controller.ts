import { Request, Response } from 'express';

import {
    getHeaderValue,
    getRequiredParam
} from '@shared/common';

import {
    createOrderService,
    getOrdersService,
    getSingleOrderService,
    updateOrderStatusService
} from '@services/order.service';

export const createOrderController = async (
    req: Request,
    res: Response
): Promise<Response> => {

    const userId = getHeaderValue(
        req.headers['x-user-id']
    );

    const order =
        await createOrderService(
            userId,
            req.body.items
        );

    return res.status(201).json({
        success: true,
        data: order
    });
};

export const getOrdersController = async (
    req: Request,
    res: Response
): Promise<Response> => {

    const userId = getHeaderValue(
        req.headers['x-user-id']
    );

    const orders =
        await getOrdersService(userId);

    return res.status(200).json({
        success: true,
        data: orders
    });
};

export const getSingleOrderController = async (
    req: Request,
    res: Response
): Promise<Response> => {

    const orderId = getRequiredParam(
        req.params.orderId,
        'orderId'
    );

    const order =
        await getSingleOrderService(
            orderId
        );

    return res.status(200).json({
        success: true,
        data: order
    });
};

export const updateOrderStatusController = async (
    req: Request,
    res: Response
): Promise<Response> => {

    const orderId = getRequiredParam(
        req.params.orderId,
        'orderId'
    );

    const order =
        await updateOrderStatusService(
            orderId,
            req.body.status
        );

    return res.status(200).json({
        success: true,
        data: order
    });
};