import {

    Router

}
from 'express';

import {

    healthController

}
from './health.controller';

export const createHealthRouter =
(
    serviceName: string
) => {

    const router =
        Router();

    const controller =
        healthController(
            serviceName
        );

    router.get('/', controller.health);
    router.get('/live', controller.live);
    router.get('/ready', controller.ready);

    return router;

};