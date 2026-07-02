import {
    retry
}
from './retry';

interface BootstrapTask {
    name: string;
    task: () => Promise<void>;
}

export const bootstrapInfrastructure =
async (
    tasks: BootstrapTask[]
): Promise<void> => {
    
    for (
        const task
        of tasks
    ) {
        await retry({
            name:
                task.name,
            task:
                task.task
        });
    }
};