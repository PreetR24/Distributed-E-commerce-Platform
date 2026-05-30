import { logger } from '../utils/logger';
import { AppError } from '../errors/app-error';

export const getRequiredParam = (
    value: string | string[] | undefined,
    paramName: string
): string => {

    if (!value) {
        logger.error(
            `Missing required route param: ${paramName}`
        );
        
        throw new AppError(
            'MISSING_ROUTE_PARAM',
            400,
            `${paramName} route param is required`
        );
    }

    if (Array.isArray(value)) {
        return value[0];
    }

    return value;
};

export const getHeaderValue = (
    value: string | string[] | undefined
): string => {

    if (!value) {
        return '';
    }

    if (Array.isArray(value)) {
        return value[0];
    }

    return value;
};