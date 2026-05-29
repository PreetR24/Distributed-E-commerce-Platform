import dotenv from 'dotenv';

dotenv.config();

import app from './app';

import {
    connectRabbitMQ
} from '@shared/common';

import {
    startPaymentFailureConsumer
} from './consumers/payment.consumer';

import {
    startInventoryFailureConsumer
} from './consumers/inventory.consumer';

const PORT = process.env.PORT || 4004;

const bootstrap = async () => {

    await connectRabbitMQ();

    await startPaymentFailureConsumer();

    await startInventoryFailureConsumer();

    app.listen(PORT, () => {
        console.log(
            `Order Service running on port ${PORT}`
        );
    });
};

bootstrap();