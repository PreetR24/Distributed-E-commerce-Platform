import {
    createCategory,
    getAllCategories
} from '@repositories/category.repository';

export const createCategoryService = async (
    name: string
) => {

    return createCategory(name);
};

export const getCategoriesService = async () => {

    return getAllCategories();
};