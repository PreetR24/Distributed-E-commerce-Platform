import dotenv from 'dotenv';

dotenv.config();

import app from './app';

import {
    connectRabbitMQ
} from '@shared/common';

const PORT = process.env.PORT || 4005;

const bootstrap = async () => {

    await connectRabbitMQ();

    app.listen(PORT, () => {

        console.log(
            `Payment Service running on port ${PORT}`
        );
    });
};

bootstrap();