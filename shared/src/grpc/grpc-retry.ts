import {

    retry

}
from '../bootstrap/retry';

export const retryGrpc =

async (

    name: string,

    task: () => Promise<void>

) => {

    await retry({

        name,

        task,

        delay: 2000,

        maxAttempts: 20

    });

};