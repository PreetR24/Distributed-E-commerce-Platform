export const PRODUCT_CACHE_KEYS = {

    SINGLE_PRODUCT:
        (productId: string) =>
            `product:id:${productId}`,

    PRODUCT_LIST:
        (
            version: number,
            page: number,
            limit: number,
            search?: string
        ) =>
            [
                `products:v${version}`,
                `page:${page}`,
                `limit:${limit}`,
                `search:${search || "all"}`
            ].join(":")
};