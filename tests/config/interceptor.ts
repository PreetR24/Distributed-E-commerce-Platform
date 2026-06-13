import {
    apiClient
}
from './api-client';

import {
    refreshAccessToken
}
from './auth';

import {
    tokens
}
from './token-store';

apiClient.interceptors.response.use(
    response => response,
    async error => {
        const originalRequest =
            error.config;

        if (
            error.response?.status === 401 &&
            !originalRequest._retry
        ) {
            originalRequest._retry =
                true;
            const isAdminRequest =
                originalRequest.headers
                    ?.Authorization ===
                `Bearer ${tokens.admin.accessToken}`;
            if (
                isAdminRequest
            ) {
                const newAccessToken =
                    await refreshAccessToken(
                        tokens.admin.refreshToken
                    );

                tokens.admin.accessToken =
                    newAccessToken;
                originalRequest.headers.Authorization =
                    `Bearer ${newAccessToken}`;
            }
            else {
                const newAccessToken =
                    await refreshAccessToken(
                        tokens.customer.refreshToken
                    );
                tokens.customer.accessToken =
                    newAccessToken;
                originalRequest.headers.Authorization =
                    `Bearer ${newAccessToken}`;
            }
            return apiClient(
                originalRequest
            );
        }

        return Promise.reject(
            error
        );
    }
);