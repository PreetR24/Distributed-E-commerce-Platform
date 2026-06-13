import {
    login
}
from './auth';

import {
    tokens
}
from './token-store';

import {env} from './env'

export const setupAuth =
async () => {

    const admin =
        await login(
            env.ADMIN_EMAIL,
            env.ADMIN_PASSWORD
        );

    tokens.admin =
        admin;

    const customer =
        await login(
            env.CUSTOMER_EMAIL,
            env.CUSTOMER_PASSWORD
        );

    tokens.customer =
        customer;
};