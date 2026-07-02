export interface RetryOptions {

    name: string;

    task: () => Promise<void>;

    maxAttempts?: number;

    delay?: number;

    backoffMultiplier?: number;

}