import path from 'path';

import * as grpc
from '@grpc/grpc-js';

import * as protoLoader
from '@grpc/proto-loader';

import {

    getProductByIdHandler,

    getAllProductsHandler

}
from './product.grpc.handler';
import { grpcLoaderOptions } from '@shared/common/grpc';

const PROTO_PATH =
    path.resolve(
        process.cwd(),
        'shared/grpc-protos/product.proto'
    );

const packageDefinition =
    protoLoader.loadSync(
        PROTO_PATH,
        grpcLoaderOptions
    );

const grpcPackage: any =
    grpc.loadPackageDefinition(
        packageDefinition
    ).product;

const grpcHost =
    process.env.PRODUCT_GRPC_HOST!;

const grpcPort =
    process.env.PRODUCT_GRPC_PORT!;

let grpcServer: grpc.Server | null =
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

        grpcPackage.ProductService.service,

        {

            GetProductById:
                getProductByIdHandler,

            GetAllProducts:
                getAllProductsHandler

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
                        `gRPC Product Server running on ${port}`
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
                        'gRPC Product Server stopped'
                    );

                    grpcServer =
                        null;

                    resolve();

                }

            );

        }

    );

};