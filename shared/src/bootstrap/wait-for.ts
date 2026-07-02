import {

    retry

}
from './retry';

import type {

    WaitOptions

}
from './wait-options';

export const waitFor =
async (

    options: WaitOptions

): Promise<void> => {

    await retry({

        name:
            options.name,

        task:
            options.task

    });

};