import {

    Router

}
from 'express';

import {

    createHealthController

}
from './health.controller';

export const createHealthRouter =
(
    serviceName: string
) => {

    const router =
        Router();

    const controller =
        createHealthController(
            serviceName
        );

    router.get(

        '/',

        controller.health

    );

    router.get(

        '/live',

        controller.live

    );

    router.get(

        '/ready',

        controller.ready

    );

    return router;

};