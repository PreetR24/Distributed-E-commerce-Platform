import axios from 'axios';

import {
    rebuildProjection
} from '@repositories/search.repository';
import { logger } from '@shared/common';

export const rebuildProductSearchProjection =
async () => {

    const response =
        await axios.get(
            `${process.env.PRODUCT_SERVICE_URL}/products/internal/rebuild`
        );

    const products =
        response.data.data;

    await rebuildProjection(
        products
    );

    logger.info(
        `Projection Rebuilt Successfully: ${products.length} Products`
    );
};