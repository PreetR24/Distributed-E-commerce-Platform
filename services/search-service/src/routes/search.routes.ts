import { Router }
from 'express';

import { asyncHandler }
from '@shared/common';

import {
    searchProductsController,
    getTrendingSearchesController,
    autocompleteProductsController
}
from '@controllers/search.controller';

const router = Router();

router.get(
    '/trending',
    asyncHandler(
        getTrendingSearchesController
    )
);

router.get(
    '/autocomplete',
    asyncHandler(
        autocompleteProductsController
    )
);

router.get(
    '/',
    asyncHandler(
        searchProductsController
    )
);

export default router;