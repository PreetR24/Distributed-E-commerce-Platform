import client from "prom-client";

export const publishedEventsCounter =
    new client.Counter({

        name:
            "rabbitmq_events_published_total",

        help:
            "Total RabbitMQ events published"

    });

export const consumedEventsCounter =
    new client.Counter({

        name:
            "rabbitmq_events_consumed_total",

        help:
            "Total RabbitMQ events consumed"

    });