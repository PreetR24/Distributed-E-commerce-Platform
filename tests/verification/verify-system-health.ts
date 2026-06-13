import axios from 'axios';
import {
    tokens
}
from '../config/token-store';

import {env} from "../config/env"
const BASE_URL = env.API_GATEWAY_URL

export const verifySystemHealth =
async () => {

    console.log(
        '\nVerifying Services...\n'
    );

    const response =
        await axios.get(
            `${BASE_URL}/system/health`,
            {
                headers: {
                
                    Authorization:
                        `Bearer ${tokens.admin.accessToken}`
                }
            }
        );

    const services =
        response.data.data;

    const failedServices =
        services.filter(
            (
                service: {
                    status: string;
                }
            ) =>
                service.status !== 'UP'
        );

    services.forEach(
        (
            service: {
                service: string;
                status: string;
            }
        ) => {

            console.log(
                `${service.status === 'UP' ? '✓' : '✗'} ${service.service}`
            );
        }
    );

    if (
        failedServices.length
    ) {

        throw new Error(
            'Some services are down'
        );
    }
};