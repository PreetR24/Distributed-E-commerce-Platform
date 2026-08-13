import * as grpc
from '@grpc/grpc-js';

import * as protoLoader
from '@grpc/proto-loader';

import {
    grpcLoaderOptions
}
from './grpc-options';

export const createGrpcClient =
(
    protoPath: string,
    packageName: string,
    serviceName: string,
    address: string
) => {

    const packageDefinition =
        protoLoader.loadSync(
            protoPath,
            grpcLoaderOptions
        );

    const grpcPackage: any =
        grpc.loadPackageDefinition(
            packageDefinition
        );

    const Service =
        grpcPackage[
            packageName
        ][
            serviceName
        ];

    return new Service(
        address,
        grpc.credentials.createInsecure()
    );

};