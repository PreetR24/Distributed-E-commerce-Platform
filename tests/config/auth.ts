import axios from 'axios';
import {env} from './env';
const BASE_URL = env.API_GATEWAY_URL;

export interface UserTokens {

    accessToken: string;

    refreshToken: string;
}

export const login = async (
    email: string,
    password: string
): Promise<UserTokens> => {

    const response =
        await axios.post(
            `${BASE_URL}/auth/login`,
            {
                email,
                password
            }
        );

    return response.data.data;
};

export const refreshAccessToken =
async (
    refreshToken: string
): Promise<string> => {

    const response =
        await axios.post(
            `${BASE_URL}/auth/refresh-token`,
            {
                refreshToken
            }
        );

    return response
        .data
        .data
        .accessToken;
};