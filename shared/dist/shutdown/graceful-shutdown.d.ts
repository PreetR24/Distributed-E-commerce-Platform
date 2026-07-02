export declare const registerShutdownTask: (name: string, task: () => Promise<void>) => void;
export declare const gracefulShutdown: () => Promise<void>;
