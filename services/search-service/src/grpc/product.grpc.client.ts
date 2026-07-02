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

const ProductClient =
    grpcPackage.ProductService;

export const productClient =
    new ProductClient(

        process.env.PRODUCT_GRPC_URL!,

        grpc.credentials.createInsecure()

    );

export const waitForProductGrpc =
async (): Promise<void> => {

    await waitFor({

        name:
            'Product gRPC',

        task:
            () =>

                new Promise<void>(

                    (
                        resolve,
                        reject
                    ) => {

                        productClient.waitForReady(

                            Date.now() + 3000,

                            (error: any) => {

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