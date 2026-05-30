import dotenv from 'dotenv';

dotenv.config();

import {
    rebuildProductSearchProjection
} from './rebuild-product-search.job';

rebuildProductSearchProjection();