import path from 'path';

import * as grpc
from '@grpc/grpc-js';

import * as protoLoader
from '@grpc/proto-loader';

import {

    grpcLoaderOptions

}
from '@shared/common/grpc';

import {

    getOrderByIdHandler

}
from './order.grpc.handler';

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

const grpcHost =
    process.env.ORDER_GRPC_HOST!;

const grpcPort =
    process.env.ORDER_GRPC_PORT!;

let grpcServer:
    grpc.Server | null =
    null;

export const startGrpcServer =
async (): Promise<void> => {

    if (
        grpcServer
    ) {

        return;

    }

    grpcServer =
        new grpc.Server();

    grpcServer.addService(

        grpcPackage.OrderService.service,

        {

            GetOrderById:
                getOrderByIdHandler

        }

    );

    await new Promise<void>(

        (
            resolve,
            reject
        ) => {

            grpcServer!.bindAsync(

                `${grpcHost}:${grpcPort}`,

                grpc.ServerCredentials.createInsecure(),

                (
                    error,
                    port
                ) => {

                    if (
                        error
                    ) {

                        return reject(
                            error
                        );

                    }

                    console.log(
                        `gRPC Order Server running on ${port}`
                    );

                    resolve();

                }

            );

        }

    );

};

export const stopGrpcServer =
async (): Promise<void> => {

    if (
        !grpcServer
    ) {

        return;

    }

    await new Promise<void>(

        resolve => {

            grpcServer!.tryShutdown(

                () => {

                    console.log(
                        'gRPC Order Server stopped'
                    );

                    grpcServer =
                        null;

                    resolve();

                }

            );

        }

    );

};