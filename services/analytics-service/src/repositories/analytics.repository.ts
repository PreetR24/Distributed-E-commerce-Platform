import { prisma }
from '@config/prisma';

export const getMetrics =
async () => {

    return prisma.analyticsMetric.findFirst();
};

export const initializeMetrics =
async () => {

    const existing =
        await prisma.analyticsMetric.findFirst();

    if (!existing) {

        await prisma.analyticsMetric.create({
            data: {}
        });
    }
};

export const incrementRevenue =
async (
    amount: number
) => {

    return prisma.analyticsMetric.updateMany({
        data: {
            totalRevenue: {
                increment: amount
            },
            totalOrders: {
                increment: 1
            }
        }
    });
};

export const incrementSuccessfulPayments =
async () => {

    return prisma.analyticsMetric.updateMany({
        data: {
            successfulPayments: {
                increment: 1
            }
        }
    });
};

export const incrementFailedPayments =
async () => {

    return prisma.analyticsMetric.updateMany({
        data: {
            failedPayments: {
                increment: 1
            }
        }
    });
};

export const incrementProducts =
async () => {

    return prisma.analyticsMetric.updateMany({
        data: {
            totalProducts: {
                increment: 1
            }
        }
    });
};