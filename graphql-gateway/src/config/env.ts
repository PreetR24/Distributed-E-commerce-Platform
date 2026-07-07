import dotenv from 'dotenv';
import path from 'path';

dotenv.config({

    path: path.resolve(
        process.cwd(),
        '.env'
    )

});

const requiredEnv = [

    'USER_SERVICE_URL',

    'PRODUCT_SERVICE_URL',

    'CART_SERVICE_URL',

    'ORDER_SERVICE_URL',

    'PAYMENT_SERVICE_URL',

    'INVENTORY_SERVICE_URL',

    'SEARCH_SERVICE_URL',

    'ANALYTICS_SERVICE_URL',

    'NOTIFICATION_SERVICE_URL'

];

for (

    const variable

    of requiredEnv

) {

    if (

        !process.env[variable]

    ) {

        throw new Error(
            `${variable} is missing`
        );

    }

}

export const env = {

    userServiceUrl:
        process.env.USER_SERVICE_URL!,

    productServiceUrl:
        process.env.PRODUCT_SERVICE_URL!,

    categoryServiceUrl:
        process.env.CATEGORY_SERVICE_URL!,

    cartServiceUrl:
        process.env.CART_SERVICE_URL!,

    orderServiceUrl:
        process.env.ORDER_SERVICE_URL!,

    paymentServiceUrl:
        process.env.PAYMENT_SERVICE_URL!,

    inventoryServiceUrl:
        process.env.INVENTORY_SERVICE_URL!,

    searchServiceUrl:
        process.env.SEARCH_SERVICE_URL!,

    port:
        Number(
            process.env.PORT || 4010
        )

};