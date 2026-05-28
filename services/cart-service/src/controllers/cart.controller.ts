import { Request, Response } from 'express';

import {
    addToCartService,
    getCartService,
    clearCartService
} from '@services/cart.service';

export const addToCartController = async (
    req: Request,
    res: Response
) => {

    const userId =
        req.headers['x-user-id'] as string;

    const cart =
        await addToCartService(
            userId,
            req.body
        );

    return res.status(200).json({
        success: true,
        data: cart
    });
};

export const getCartController = async (
    req: Request,
    res: Response
) => {

    const userId =
        req.headers['x-user-id'] as string;

    const cart =
        await getCartService(userId);

    return res.status(200).json({
        success: true,
        data: cart
    });
};

export const clearCartController = async (
    req: Request,
    res: Response
) => {

    const userId =
        req.headers['x-user-id'] as string;

    await clearCartService(userId);

    return res.status(200).json({
        success: true,
        message: 'Cart cleared'
    });
};