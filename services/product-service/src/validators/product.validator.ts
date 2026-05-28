import { z } from 'zod';

export const createProductSchema = z.object({
    body: z.object({
        name: z.string().min(2),
        description: z.string().min(5),
        price: z.number().positive(),
        stock: z.number().int().min(0),
        categoryId: z.string()
    })
});