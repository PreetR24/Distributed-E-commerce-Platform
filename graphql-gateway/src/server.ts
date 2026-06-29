import express from 'express';

import cors from 'cors';

import { ApolloServer }
from '@apollo/server';

import { expressMiddleware }
from '@as-integrations/express5';

import { typeDefs }
from '@schemas/index';

import { resolvers }
from '@resolvers/index';

import { env } from '@config/env';

export interface GraphQLContext {
    token: string | null;
}

const bootstrap = async () => {

    const app = express();
    const PORT = env.port;

    const server =
        new ApolloServer<GraphQLContext>({

            typeDefs,

            resolvers
        });

    await server.start();

    app.use(
        '/graphql',

        cors(),

        express.json(),

        expressMiddleware(
            server,

            {
                context: async ({
                    req
                }) => ({
                    token: req.headers.authorization || null,
                })
            }
        )
    );

    app.listen(
        PORT,

        () => {

            console.log(
                `GraphQL Gateway Running On Port ${PORT}`
            );
        }
    );
};

bootstrap();