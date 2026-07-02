interface ExchangeConfig {
    name: string;
    type?: 'fanout' | 'direct' | 'topic';
    durable?: boolean;
}
interface QueueConfig {
    name: string;
    exchange: string;
    routingKey?: string;
    durable?: boolean;
}
interface RabbitMQSetup {
    exchanges?: ExchangeConfig[];
    queues?: QueueConfig[];
}
export declare const setupRabbitMQ: (config: RabbitMQSetup) => Promise<void>;
export {};
