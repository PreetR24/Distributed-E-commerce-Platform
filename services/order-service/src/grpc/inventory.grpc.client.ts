import path from 'path';

import * as grpc
from '@grpc/grpc-js';

import * as protoLoader
from '@grpc/proto-loader';

const PROTO_PATH =
    path.resolve(
        process.cwd(),
        'shared/grpc-protos/inventory.proto'
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

const inventoryProto: any =
    grpc.loadPackageDefinition(
        packageDefinition
    ).inventory;

const grpcServer =
    process.env.INVENTORY_GRPC_URL;

export const inventoryClient =
    new inventoryProto.InventoryService(
        grpcServer,
        grpc.credentials.createInsecure()
    );