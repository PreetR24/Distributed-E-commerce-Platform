import path from 'path';

import * as grpc
from '@grpc/grpc-js';

import * as protoLoader
from '@grpc/proto-loader';

import {
    checkInventoryHandler
} from './inventory.grpc.handler';

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

const grpcHost =
    process.env.INVENTORY_GRPC_HOST;

const grpcPort =
    process.env.INVENTORY_GRPC_PORT;

export const startGrpcServer =
    () => {

        const server =
            new grpc.Server();

        server.addService(
            inventoryProto.InventoryService.service,
            {
                CheckInventory:
                    checkInventoryHandler
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
                    `Inventory gRPC Server running on ${port}`
                );
            }
        );
    };