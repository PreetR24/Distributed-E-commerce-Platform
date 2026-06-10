import path from 'path';

import * as grpc
from '@grpc/grpc-js';

import * as protoLoader
from '@grpc/proto-loader';

const PROTO_PATH =
    path.resolve(
        __dirname,
        '../../../../shared/grpc-protos/order.proto'
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

const grpcServer = process.env.ORDER_GRPC_URL;

export const orderClient =
    new orderProto.OrderService(
        grpcServer,
        grpc.credentials.createInsecure()
    );