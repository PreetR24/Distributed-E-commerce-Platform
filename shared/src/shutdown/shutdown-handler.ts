import { gracefulShutdown } from "./graceful-shutdown";

export const registerShutdownSignals =
(): void => {

    process.once(
        "SIGTERM",
        gracefulShutdown
    );

    process.once(
        "SIGINT",
        gracefulShutdown
    );
};