import {
    getNotifications,
    markNotificationRead,
    markAllRead
}
from '@repositories/notification.repository';

export const getNotificationsService =
async (
    userId: string
) => {

    return getNotifications(
        userId
    );
};

export const markReadService =
async (
    notificationId: string
) => {

    return markNotificationRead(
        notificationId
    );
};

export const markAllReadService =
async (
    userId: string
) => {

    return markAllRead(
        userId
    );
};