interface BootstrapTask {
    name: string;
    task: () => Promise<void>;
}
export declare const bootstrapInfrastructure: (tasks: BootstrapTask[]) => Promise<void>;
export {};
