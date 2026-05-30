import dotenv from 'dotenv';
import app from './app';
import { logger } from '@shared/common';

dotenv.config();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    logger.info(`API Gateway running on port ${PORT}`);
});