import {

    Request,
    Response,
    NextFunction

} from 'express';

import {
    logger
} from '../utils/logger';

export const requestLogger =
(
    req: Request,
    res: Response,
    next: NextFunction
) => {

    logger.info(
        'Incoming Request',
        {

            method:
                req.method,

            url:
                req.originalUrl,

            requestId:
                req.headers[
                    'x-request-id'
                ]
        }
    );

    logger.info(
    'Incoming Request',
    {
        requestId:
            req.headers['x-request-id']
    }
);

    next();
};