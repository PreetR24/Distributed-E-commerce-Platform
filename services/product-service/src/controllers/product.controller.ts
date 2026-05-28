import { Request, Response } from 'express';

import {
    createProductService,
    getProductsService
} from '@services/product.service';

export const createProductController = async (
    req: Request,
    res: Response
) => {

    const product =
        await createProductService(req.body);

    return res.status(201).json({
        success: true,
        data: product
    });
};

export const getProductsController = async (
    req: Request,
    res: Response
) => {

    const page =
        Number(req.query.page) || 1;

    const limit =
        Number(req.query.limit) || 10;

    const search =
        req.query.search as string;

    const products =
        await getProductsService(
            page,
            limit,
            search
        );

    return res.status(200).json({
        success: true,
        data: products
    });
};