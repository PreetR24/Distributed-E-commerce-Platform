export const PRODUCT_CACHE_KEYS = {

    SINGLE_PRODUCT:
        (productId: string) =>
            `product:id:${productId}`,

    PRODUCT_LIST:
        (
            page: number,
            limit: number,
            search?: string
        ) =>
            `products:page:${page}:limit:${limit}:search:${search || 'all'}`

};