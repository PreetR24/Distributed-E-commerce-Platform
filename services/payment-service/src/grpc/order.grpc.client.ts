import path from 'path';

import * as grpc
from '@grpc/grpc-js';

import * as protoLoader
from '@grpc/proto-loader';

import {

    grpcLoaderOptions,

}
from '@shared/common/grpc';

import {
    waitFor
} from '@shared/common';

const PROTO_PATH =
    path.resolve(
        process.cwd(),
        'shared/grpc-protos/order.proto'
    );

const packageDefinition =
    protoLoader.loadSync(
        PROTO_PATH,
        grpcLoaderOptions
    );

const grpcPackage: any =
    grpc.loadPackageDefinition(
        packageDefinition
    ).order;

const OrderClient =
    grpcPackage.OrderService;

export const orderClient =
    new OrderClient(

        process.env.ORDER_GRPC_URL!,

        grpc.credentials.createInsecure()

    );

export const waitForOrderGrpc =
async (): Promise<void> => {

    await waitFor({

        name:
            'Order gRPC',

        task:
            () =>

                new Promise<void>(

                    (
                        resolve,
                        reject
                    ) => {

                        orderClient.waitForReady(

                            Date.now() + 3000,

                            (error: any) => {

                                if (error) {

                                    return reject(error);

                                }

                                resolve();

                            }

                        );

                    }

                )

    });

};