import axios from 'axios';

import {
    rebuildProjection
} from '@repositories/search.repository';

export const rebuildProductSearchProjection =
async () => {

    console.log(
        'Starting Projection Rebuild...'
    );

    const response =
        await axios.get(
            'http://localhost:4002/api/v1/products/internal/rebuild'
        );

    const products =
        response.data.data;

    await rebuildProjection(
        products
    );

    console.log(
        `Projection Rebuilt Successfully: ${products.length} Products`
    );
};