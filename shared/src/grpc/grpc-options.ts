import * as protoLoader
from '@grpc/proto-loader';

export const grpcLoaderOptions:
protoLoader.Options = {

    keepCase: true,

    longs: String,

    enums: String,

    defaults: true,

    oneofs: true

};