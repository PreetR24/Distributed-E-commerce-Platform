import {
    Request,
    Response,
    NextFunction
}
from 'express';

import { AppError }
from '../errors/app-error';

export const globalErrorHandler = (
    error: any,
    req: Request,
    res: Response,
    _next: NextFunction
) => {

    if (
        error?.name ===
        'PrismaClientKnownRequestError'
    ) {

        if (error.code === 'P2002') {

            const modelName =
                error.meta?.modelName;

            let message =
                'Resource already exists';

            let errorCode =
                'RESOURCE_ALREADY_EXISTS';

            if (modelName === 'Category') {
                message = 'Category already exists';
                errorCode = 'CATEGORY_ALREADY_EXISTS';
            }

            if (modelName === 'User') {
                message = 'User already exists';
                errorCode = 'USER_ALREADY_EXISTS';
            }

            if (modelName === 'Product') {
                message = 'Product already exists';
                errorCode = 'PRODUCT_ALREADY_EXISTS';
            }

            if (modelName === 'Order') {
                message = 'Order already exists';
                errorCode = 'ORDER_ALREADY_EXISTS';
            }

            return res.status(409).json({
                success: false,
                statusCode: 409,
                error: {
                    code: errorCode,
                    message
                },
                timestamp: new Date().toISOString(),
                path: req.originalUrl
            });
        }

        if (error.code === 'P2025') {

            return res.status(404).json({
                success: false,
                statusCode: 404,
                error: {
                    code: 'RESOURCE_NOT_FOUND',
                    message: 'Resource not found'
                },
                timestamp: new Date().toISOString(),
                path: req.originalUrl
            });
        }
    }

    if (error instanceof AppError) {

        return res.status(error.statusCode).json({
            success: false,
            statusCode: error.statusCode,
            error: {
                code: error.code,
                message: error.message
            },
            timestamp: new Date().toISOString(),
            path: req.originalUrl
        });
    }

    console.error(error);

    return res.status(500).json({
        success: false,
        statusCode: 500,
        error: {
            code: 'INTERNAL_SERVER_ERROR',
            message: 'Something went wrong'
        },
        timestamp: new Date().toISOString(),
        path: req.originalUrl
    });
};