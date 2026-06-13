import dotenv from 'dotenv';

dotenv.config();

const io =
    require(
        "socket.io-client"
    );

const PORT = process.env.PORT;
const sampleUser = process.env.SAMPLE_USER;

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
    `notification:${sampleUser}`,
    (
        notification: Notification
    ) => {

        console.log(
            notification
        );
    }
);