import * as grpc
from '@grpc/grpc-js';

import {

    retry

}
from '../bootstrap/retry';

export const waitForGrpc =
async (

    name: string,

    address: string

): Promise<void> => {

    await retry({

        name,

        task:

            () =>

                new Promise<void>(

                    (

                        resolve,

                        reject

                    ) => {

                        const client =

                            new grpc.Client(

                                address,

                                grpc.credentials.createInsecure()

                            );

                        client.waitForReady(

                            Date.now() + 3000,

                            (

                                error

                            ) => {

                                client.close();

                                if (

                                    error

                                ) {

                                    return reject(
                                        error
                                    );

                                }

                                resolve();

                            }

                        );

                    }

                )

    });

};