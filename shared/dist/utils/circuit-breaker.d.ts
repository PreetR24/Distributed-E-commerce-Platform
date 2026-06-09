export declare class CircuitBreaker {
    private failures;
    private isOpen;
    execute: (fn: Function) => Promise<any>;
}
