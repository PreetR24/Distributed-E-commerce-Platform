import { createProductIndex } from "@search/create-index";
import { logger } from "@shared/common";

const sleep = (ms: number) =>
    new Promise(resolve =>
        setTimeout(resolve, ms)
    );

export const waitForElasticsearch =
async () => {

    for (
        let attempt = 1;
        attempt <= 20;
        attempt++
    ) {

        try {

            await createProductIndex();

            logger.info(
                'Elasticsearch ready'
            );

            return;

        } catch (error) {

            logger.warn(
                `Elasticsearch not ready. Attempt ${attempt}/20`
            );

            await sleep(5000);
        }
    }

    throw new Error(
        'Elasticsearch unavailable'
    );
};