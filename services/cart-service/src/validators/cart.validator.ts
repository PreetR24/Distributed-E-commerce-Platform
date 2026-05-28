import { z } from 'zod';

export const addToCartSchema = z.object({
    body: z.object({
        productId: z.string(),
        name: z.string(),
        price: z.number().positive(),
        quantity: z.number().int().positive()
    })
});