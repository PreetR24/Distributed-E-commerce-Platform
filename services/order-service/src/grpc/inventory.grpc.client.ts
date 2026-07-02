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

const InventoryClient =
    grpcPackage.InventoryService;

export const inventoryClient =
    new InventoryClient(

        process.env.INVENTORY_GRPC_URL!,

        grpc.credentials.createInsecure()

    );

export const waitForInventoryGrpc =
async (): Promise<void> => {

    await waitFor({

        name:
            'Inventory gRPC',

        task:
            () =>

                new Promise<void>(

                    (
                        resolve,
                        reject
                    ) => {

                        inventoryClient.waitForReady(

                            Date.now() + 3000,

                            (error:any) => {

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