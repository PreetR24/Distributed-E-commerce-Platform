import {
    createCategory,
    getAllCategories
} from '@repositories/category.repository';

import { logger } from '@shared/common';

export const createCategoryService = async (
    name: string
) => {

    const category = await createCategory(name);

    logger.info(`Category ${name} created successfully.`);

    return category;
};

export const getCategoriesService = async () => {

    return getAllCategories();
};