import { Request, Response } from 'express';

import {
    createProductService,
    getProductsService,
    getSingleProductService,
    updateProductService,
    getAllProductsService
} from '@services/product.service';

import { logger } from '@shared/common';

type ProductParams = {
    productId: string;
};

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

        logger.info(
    'Request Reached Product Service',
    {
        requestId:
            req.headers['x-request-id']
    }
);

    return res.status(200).json({
        success: true,
        data: products
    });
};

export const getSingleProductController = async (
    req: Request<ProductParams>,
    res: Response
) => {

    const productId =
        req.params.productId;

    const product =
        await getSingleProductService(
            productId
        );

    return res.status(200).json({
        success: true,
        data: product
    });
};

export const updateProductController = async (
    req: Request<ProductParams>,
    res: Response
) => {

    const productId =
        req.params.productId;

    const updatedProduct =
        await updateProductService(
            productId,
            req.body
        );

    return res.status(200).json({
        success: true,
        message: 'Product updated successfully',
        data: updatedProduct
    });
};

export const getAllProductsController =
async (
    _req: Request,
    res: Response
) => {

    const products =
        await getAllProductsService();

    return res.status(200).json({
        success: true,
        data: products
    });
};