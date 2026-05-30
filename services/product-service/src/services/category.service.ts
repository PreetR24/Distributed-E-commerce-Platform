import {
    createCategory,
    getAllCategories
} from '@repositories/category.repository';

import { logger } from '@shared/common';

export const createCategoryService = async (
    name: string
) => {

    await createCategory(name);

    logger.info(`Category ${name} created successfully.`);

    return { message: `Category ${name} created successfully.` };
};

export const getCategoriesService = async () => {

    return getAllCategories();
};