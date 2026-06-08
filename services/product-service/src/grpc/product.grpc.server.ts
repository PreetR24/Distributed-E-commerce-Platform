import path from 'path';

import * as grpc
from '@grpc/grpc-js';

import * as protoLoader
from '@grpc/proto-loader';

import {
    getProductByIdHandler
}
from './product.grpc.handler';

const PROTO_PATH =
    path.resolve(
        __dirname,
        '../../../../shared/grpc-protos/product.proto'
    );

const packageDefinition =
    protoLoader.loadSync(
        PROTO_PATH,
        {
            keepCase: true,
            longs: String,
            enums: String,
            defaults: true,
            oneofs: true
        }
    );

const productProto: any =
    grpc.loadPackageDefinition(
        packageDefinition
    ).product;

const grpcServer = process.env.PRODUCT_GRPC_URL;

export const startGrpcServer =
    () => {

        const server =
            new grpc.Server();

        server.addService(
            productProto.ProductService.service,
            {
                GetProductById:
                    getProductByIdHandler
            }
        );

        server.bindAsync(
            `0.0.0.0:${grpcServer}`,
            grpc.ServerCredentials.createInsecure(),
            (
                error,
                port
            ) => {

                if (error) {
                    throw error;
                }

                console.log(
                    `gRPC Product Server running on ${port}`
                );
            }
        );
    };