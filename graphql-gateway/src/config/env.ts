import dotenv from 'dotenv';
import path from 'path';

dotenv.config({

    path: path.resolve(
        process.cwd(),
        '.env'
    )
});

if (
    !process.env.API_GATEWAY_URL
) {

    throw new Error(
        'API_GATEWAY_URL is missing'
    );
}

export const env = {

    apiGatewayUrl:
        process.env.API_GATEWAY_URL,

    port:
        Number(
            process.env.PORT || 4010
        )
};