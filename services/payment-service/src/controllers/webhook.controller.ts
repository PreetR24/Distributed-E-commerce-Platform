import { Request, Response } from 'express';

export const paymentWebhookController = async (
    req: Request,
    res: Response
) => {

    console.log(
        'Webhook Received:',
        req.body
    );

    return res.status(200).json({
        success: true,
        message: 'Webhook processed'
    });
};