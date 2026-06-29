import {
    getAllProducts
}
from '@grpc/product.grpc.service';

import {

    upsertSearchProduct

}
from '@repositories/search.repository';

import {

    logger

}
from '@shared/common';

export const synchronizeProducts =
async () => {

    const products =
        await getAllProducts();

    logger.info({

        event:
            'SYNC_STARTED',

        count:
            products.length
    });

    for (
        const product
        of products
    ) {

        await upsertSearchProduct(
            product
        );
    }

    logger.info({

        event:
            'SYNC_COMPLETED',

        count:
            products.length
    });
};