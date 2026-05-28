import { z } from 'zod';

export const createOrderSchema = z.object({
    body: z.object({
        items: z.array(
            z.object({
                productId: z.string(),
                productName: z.string(),
                productPrice: z.number().positive(),
                quantity: z.number().int().positive()
            })
        )
    })
});