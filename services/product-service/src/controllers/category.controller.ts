import { Request, Response }
from 'express';

import {
    createCategoryService,
    getCategoriesService
}
from '@services/category.service';

export const createCategoryController = async (
    req: Request,
    res: Response
) => {

    const category =
        await createCategoryService(
            req.body.name
        );

    return res.status(201).json({
        success: true,
        message: 'Category created successfully',
        data: category
    });
};

export const getCategoriesController = async (
    _req: Request,
    res: Response
) => {

    const categories =
        await getCategoriesService();

    return res.status(200).json({
        success: true,
        message: 'Categories fetched successfully',
        data: categories
    });
};