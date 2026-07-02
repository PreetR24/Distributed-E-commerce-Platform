import type { RetryOptions } from './retry-options';
export declare const retry: ({ name, task, maxAttempts, delay, backoffMultiplier }: RetryOptions) => Promise<void>;
