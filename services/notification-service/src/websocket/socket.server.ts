import {
    Server
}
from 'socket.io';

let io: Server;

export const initializeSocket =
(
    server: any
) => {

    io =
        new Server(
            server,
            {
                cors: {
                    origin: '*'
                }
            }
        );

    io.on(
        'connection',
        socket => {

            socket.on(
                'join',
                (
                    userId
                ) => {

                    socket.join(
                        userId
                    );
                }
            );
        }
    );
};

export const sendNotification =
(
    userId: string,
    notification: any
) => {

    io.emit(
        `notification:${userId}`,
        notification
    );
};