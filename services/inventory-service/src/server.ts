import dotenv from 'dotenv';

dotenv.config();

import app from './app';

import {
    connectRabbitMQ
} from '@shared/common';

import {
    startOrderConsumer
} from './consumers/order.consumer';

const PORT = process.env.PORT || 4006;

const bootstrap = async () => {

    await connectRabbitMQ();

    await startOrderConsumer();

    app.listen(PORT, () => {

        console.log(
            `Inventory Service running on port ${PORT}`
        );
    });
};

bootstrap();