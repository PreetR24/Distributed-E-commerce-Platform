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

    checkInventoryHandler

}
from './inventory.grpc.handler';

const PROTO_PATH =
    path.resolve(
        process.cwd(),
        'shared/grpc-protos/inventory.proto'
    );

const packageDefinition =
    protoLoader.loadSync(
        PROTO_PATH,
        grpcLoaderOptions
    );

const grpcPackage: any =
    grpc.loadPackageDefinition(
        packageDefinition
    ).inventory;

const grpcHost =
    process.env.INVENTORY_GRPC_HOST!;

const grpcPort =
    process.env.INVENTORY_GRPC_PORT!;

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

        grpcPackage.InventoryService.service,

        {

            CheckInventory:
                checkInventoryHandler

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
                        `gRPC Inventory Server running on ${port}`
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
                        'gRPC Inventory Server stopped'
                    );

                    grpcServer =
                        null;

                    resolve();

                }

            );

        }

    );

};