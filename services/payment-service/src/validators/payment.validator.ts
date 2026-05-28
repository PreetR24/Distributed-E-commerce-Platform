import { z } from 'zod';

export const createPaymentSchema = z.object({
    body: z.object({
        orderId: z.string(),
        amount: z.number().positive(),
        currency: z.string().default('USD'),
        paymentProvider: z.string(),
        idempotencyKey: z.string()
    })
});