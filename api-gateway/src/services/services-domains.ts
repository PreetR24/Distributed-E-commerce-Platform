import dotenv from 'dotenv';

dotenv.config();

export const SERVICES = {

    USER:
        process.env.USER_SERVICE_URL,

    PRODUCT:
        process.env.PRODUCT_SERVICE_URL!,

    CART:
        process.env.CART_SERVICE_URL!,

    ORDER:
        process.env.ORDER_SERVICE_URL!,

    PAYMENT:
        process.env.PAYMENT_SERVICE_URL!,

    INVENTORY:
        process.env.INVENTORY_SERVICE_URL!,

    SEARCH:
        process.env.SEARCH_SERVICE_URL!,

    ANALYTICS:
        process.env.ANALYTICS_SERVICE_URL!,

    NOTIFICATION:
        process.env.NOTIFICATION_SERVICE_URL!
};