import {
    getMetrics
}
from '@repositories/analytics.repository';

export const getDashboardService =
async () => {

    return getMetrics();
};