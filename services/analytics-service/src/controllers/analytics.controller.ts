import {
    Request,
    Response
}
from 'express';

import {
    getDashboardService
}
from '@services/analytics.service';

export const getDashboardController =
async (
    _req: Request,
    res: Response
) => {

    const dashboard =
        await getDashboardService();

    return res.status(200).json({
        success: true,
        data: dashboard
    });
};