import dotenv from "dotenv";

dotenv.config();

import express from "express";
import cors from "cors";

import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@as-integrations/express5";

import { typeDefs } from "@schemas/index";
import { resolvers } from "@resolvers/index";

import { env } from "@config/env";
import { logger, registerShutdownSignals, registerShutdownTask } from "@shared/common";

import { initialize } from "./initialize/initialize";

import v1Routes from "./v1";

export interface GraphQLContext {
    token: string | null;
}

const bootstrapServer = async (): Promise<void> => {
    try {

        const app = express();

        const apolloServer = new ApolloServer<GraphQLContext>({
            typeDefs,
            resolvers
        });

        await apolloServer.start();

        app.use(
            "/api/v1",
            v1Routes
        );

        app.use(
            "/graphql",
            cors(),
            express.json(),
            expressMiddleware(apolloServer, {
                context: async ({ req }) => ({
                    token: req.headers.authorization ?? null
                })
            })
        );

        await initialize();

        const httpServer = app.listen(env.port, () => {
            logger.info(
                `GraphQL Gateway running on port ${env.port}`
            );
        });

        registerShutdownTask(
            "GraphQL Gateway Server",
            () =>
                new Promise<void>(
                    (
                        resolve,
                        reject
                    ) => {
                        httpServer.close(
                            error => {
                                if (error) {
                                    reject(error);
                                } else {
                                    resolve();
                                }
                            }
                        );
                    }
                )
        );

        registerShutdownTask(
            "Apollo Server",
            () =>
                new Promise<void>(
                    (
                        resolve,
                        reject
                    ) => {
                        apolloServer.stop().then(() => {
                            httpServer.close(
                                error => {
                                    if (error) {
                                        reject(error);
                                    } else {
                                        resolve();
                                    }
                                })
                            }
                        );
                    }
                )
        );

        registerShutdownSignals();
    } catch (error) {
        logger.error(
            "Failed to start GraphQL Gateway",
            error
        );

        process.exit(1);
    }
};

bootstrapServer();