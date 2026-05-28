import {
    createProduct,
    getProducts
} from '@repositories/product.repository';

export const createProductService = async (
    data: {
        name: string;
        description: string;
        price: number;
        stock: number;
        categoryId: string;
    }
) => {

    return createProduct(data);
};

export const getProductsService = async (
    page: number,
    limit: number,
    search?: string
) => {

    return getProducts(
        page,
        limit,
        search
    );
};