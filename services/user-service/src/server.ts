import dotenv from 'dotenv';

dotenv.config();

import app from './app';
import { logger } from '@shared/common';

const PORT = process.env.PORT || 4001;

app.listen(PORT, () => {
    logger.info(
        `User Service running on port ${PORT}`
    );
});