import {
    consumeEvent,
    EXCHANGES,
    logger
} from '@shared/common';

import {
    upsertSearchProduct
} from '@repositories/search.repository';

import {
    indexProduct
}
from '@search/product-index.repository';

export const startProductConsumer =
async () => {

    await consumeEvent(
        EXCHANGES.PRODUCT_EVENTS,

        'search.products',

        async (data) => {

            if (
                data.event === 'product.created'
                ||
                data.event === 'product.updated'
            ) {

                await upsertSearchProduct(
                    data.product
                );

                await indexProduct(
                    data.product
                );
            }
        }
    );

    logger.info(
        'Product Consumer Started'
    );
};