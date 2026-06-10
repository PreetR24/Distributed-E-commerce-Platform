import { prisma }
from '@config/prisma';

export const createNotification =
async (
    data: any
) => {

    return prisma.notification.create({
        data
    });
};

export const getNotifications =
async (
    userId: string
) => {

    return prisma.notification.findMany({

        where: {
            userId
        },

        orderBy: {
            createdAt: 'desc'
        }
    });
};

export const markNotificationRead =
async (
    notificationId: string
) => {

    return prisma.notification.update({

        where: {
            id: notificationId
        },

        data: {
            isRead: true
        }
    });
};

export const markAllRead =
async (
    userId: string
) => {

    return prisma.notification.updateMany({

        where: {
            userId
        },

        data: {
            isRead: true
        }
    });
};