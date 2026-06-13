import {
    getSystemHealth
}
from '@services/system-health.service';

export const systemHealthController =
async (
    _request: any,
    response: any
) => {

    const data =
        await getSystemHealth();

    return response.status(200).json({
        success: true,
        data
    });
};