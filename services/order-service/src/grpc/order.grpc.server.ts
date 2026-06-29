import path from 'path';

import * as grpc
from '@grpc/grpc-js';

import * as protoLoader
from '@grpc/proto-loader';

import {
    getOrderByIdHandler,
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
        {
            keepCase: true,
            longs: String,
            enums: String,
            defaults: true,
            oneofs: true
        }
    );

const orderProto: any =
    grpc.loadPackageDefinition(
        packageDefinition
    ).order;

const grpcHost = process.env.ORDER_GRPC_HOST;
const grpcPort = process.env.ORDER_GRPC_PORT;

export const startOrderGrpcServer =
    () => {

        const server =
            new grpc.Server();

        server.addService(
            orderProto.OrderService.service,
            {
                GetOrderById:
                    getOrderByIdHandler
            }
        );

        server.bindAsync(
            `${grpcHost}:${grpcPort}`,
            grpc.ServerCredentials.createInsecure(),
            (
                error,
                port
            ) => {

                if (error) {
                    throw error;
                }

                console.log(
                    `gRPC Order Server running on ${port}`
                );
            }
        );
    };