import {

    Request,

    Response

} from 'express';

import {

    searchProductsService,

    getTrendingSearchesService,

    autocompleteProductsService

} from '@services/search.service';

export const searchProductsController =
async (
    req: Request,
    res: Response
) => {

    const result =
        await searchProductsService({

            search:
                req.query.search as string,

            categoryId:
                req.query.categoryId as string,

            minPrice:
                req.query.minPrice
                    ? Number(req.query.minPrice)
                    : undefined,

            maxPrice:
                req.query.maxPrice
                    ? Number(req.query.maxPrice)
                    : undefined,

            page:
                Number(req.query.page || 1),

            limit:
                Number(req.query.limit || 10),

            sortBy:
                req.query.sortBy as any,

            sortOrder:
                req.query.sortOrder as any
        });

    return res.status(200).json({

        success: true,

        data: result
    });
};

export const getTrendingSearchesController =
async (
    _req: Request,
    res: Response
) => {

    const result =
        await getTrendingSearchesService();

    return res.status(200).json({

        success: true,

        data: result
    });
};

export const autocompleteProductsController =
async (
    req: Request,
    res: Response
) => {

    const query =
        String(
            req.query.q || ''
        );

    const suggestions =
        await autocompleteProductsService(
            query
        );

    return res.status(200).json({

        success: true,

        data: suggestions
    });
};