export declare const connectRabbitMQ: () => Promise<void>;
export declare const publishEvent: (exchange: string, routingKey: string, message: unknown) => Promise<void>;
export declare const consumeEvent: (exchange: string, queue: string, callback: (data: any) => Promise<void>) => Promise<void>;
