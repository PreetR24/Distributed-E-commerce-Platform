import dotenv from 'dotenv';

dotenv.config();

const io =
    require(
        "socket.io-client"
    );

const PORT = process.env.PORT;

interface Notification {
    id: string;
    title: string;
    message: string;
    type: string;
    isRead: boolean;
}

const socket =
    io(
        `http://localhost:${PORT}`
    );

socket.on(
    "connect",
    () => {

        console.log(
            "Connected"
        );
    }
);

socket.on(
    "notification:bc4542e3-7749-4137-a2e4-1dfb0705afed",
    (
        notification: Notification
    ) => {

        console.log(
            notification
        );
    }
);