import axios from 'axios';

import {
    rebuildProjection
} from '@repositories/search.repository';
import { logger } from '@shared/common';

export const rebuildProductSearchProjection =
async () => {

    const response =
        await axios.get(
            'http://localhost:4002/api/v1/products/internal/rebuild'
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