import path from 'path';

import * as grpc
from '@grpc/grpc-js';

import * as protoLoader
from '@grpc/proto-loader';

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

export const productClient =
    new productProto.ProductService(
        grpcServer,
        grpc.credentials.createInsecure()
    );