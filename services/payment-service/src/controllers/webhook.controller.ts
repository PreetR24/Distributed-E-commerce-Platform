import { logger } from '@shared/common';
import { Request, Response } from 'express';

export const paymentWebhookController = async (
    req: Request,
    res: Response
) => {

    logger.info(
        'Webhook Received:',
        {
            body: req.body
        }
    );

    return res.status(200).json({
        success: true,
        message: 'Webhook processed'
    });
};