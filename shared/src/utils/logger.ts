import winston from 'winston';

export const logger =
    winston.createLogger({

        level:
            process.env.LOG_LEVEL || 'info',

        defaultMeta: {

            service:
                process.env.SERVICE_NAME ||
                'unknown-service'
        },

        format:
            winston.format.combine(

                winston.format.timestamp(),

                winston.format.errors({
                    stack: true
                }),

                winston.format.json()
            ),

        transports: [

            new winston.transports.Console()
        ],

        exceptionHandlers: [

            new winston.transports.Console()
        ],

        rejectionHandlers: [

            new winston.transports.Console()
        ]
    });