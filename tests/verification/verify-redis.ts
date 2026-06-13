import {
    createClient
}
from 'redis';

import {env} from "../config/env"

export const verifyRedis =
async () => {

    console.log(
        '\nVerifying Redis...\n'
    );

    const client =
        createClient({

            url: env.REDIS_URL
        });

    await client.connect();

    await client.set(
        'verification-key',
        'ok'
    );

    const value =
        await client.get(
            'verification-key'
        );

    if (
        value !== 'ok'
    ) {

        throw new Error(
            'Redis Verification Failed'
        );
    }

    console.log(
        '✓ Redis Connected'
    );

    await client.quit();
};