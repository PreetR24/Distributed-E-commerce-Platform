import path from 'path';

export const getGrpcProtoPath =
(
    proto: string
) => {

    if (
        process.env.NODE_ENV === 'production'
    ) {

        return path.resolve(
            process.cwd(),
            `shared/grpc-protos/${proto}`
        );
    }

    return path.resolve(
        __dirname,
        `../../../shared/grpc-protos/${proto}`
    );
};