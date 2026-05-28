import { Request, Response } from 'express';

import {
    createPaymentService,
    getUserPaymentsService
} from '@services/payment.service';

export const createPaymentController = async (
    req: Request,
    res: Response
) => {

    const userId = req.headers['x-user-id'] as string;

    const payment =
        await createPaymentService(
            userId,
            req.body
        );

    return res.status(201).json({
        success: true,
        data: payment
    });
};

export const getUserPaymentsController = async (
    req: Request,
    res: Response
) => {

    const userId = req.headers['x-user-id'] as string;

    const payments = await getUserPaymentsService(userId);

    return res.status(200).json({
        success: true,
        data: payments
    });
};