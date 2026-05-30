import { prisma }
from '@config/prisma';

import {
    indexProduct
}
from '../search/product-index.repository';

export const reindexProducts =
async () => {

    const products =
        await prisma.productSearch.findMany();

    for (
        const product
        of products
    ) {

        await indexProduct(
            product
        );
    }
};