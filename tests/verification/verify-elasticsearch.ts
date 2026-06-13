import {
    Client
}
from '@elastic/elasticsearch';

import {env} from "../config/env"

export const verifyElasticsearch =
async () => {

    console.log(
        '\nVerifying Elasticsearch...\n'
    );

    const client =
        new Client({

            node: env.ELASTIC_SEARCH_URL
        });

    await client.info();

    console.log(
        '✓ Elasticsearch Connected'
    );
};