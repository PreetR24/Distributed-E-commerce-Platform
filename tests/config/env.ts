import dotenv from 'dotenv';
import path from 'path';

dotenv.config({
    path: path.resolve(__dirname, '../.env')
});

const required = [
    'API_GATEWAY_URL',
    'ADMIN_EMAIL',
    'ADMIN_PASSWORD',
    'CUSTOMER_EMAIL',
    'CUSTOMER_PASSWORD',
    'REDIS_URL',
    'ELASTIC_SEARCH_URL'
];

for (const key of required) {
    if (!process.env[key]) {
        throw new Error(
            `Missing environment variable: ${key}`
        );
    }
}

export const env = {
    API_GATEWAY_URL: process.env.API_GATEWAY_URL!,
    ADMIN_EMAIL: process.env.ADMIN_EMAIL!,
    ADMIN_PASSWORD: process.env.ADMIN_PASSWORD!,
    CUSTOMER_EMAIL: process.env.CUSTOMER_EMAIL!,
    CUSTOMER_PASSWORD: process.env.CUSTOMER_PASSWORD!,
    REDIS_URL: process.env.REDIS_URL!,
    ELASTIC_SEARCH_URL: process.env.ELASTIC_SEARCH_URL!
};