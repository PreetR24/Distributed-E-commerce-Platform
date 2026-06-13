import { verifySystemHealth } from './verification/verify-system-health';
import { verifyRabbitMQ } from './verification/verify-rabbitmq';
import { verifyRedis } from './verification/verify-redis';
import { verifyElasticsearch } from './verification/verify-elasticsearch';
import { verifyPostgres } from './verification/verify-postgres';
import { runCommerceWorkflow } from './workflows/full-commerce-workflow';
import { setupAuth } from './config/setup-auth';

(async () => {
    try {
        await verifySystemHealth();
        await verifyRabbitMQ();
        await verifyRedis();
        await verifyElasticsearch();
        await verifyPostgres();
        await setupAuth();
        await runCommerceWorkflow();

        console.log(
            '\n================================='
        );

        console.log(
            '✓ SYSTEM VERIFICATION PASSED'
        );

        console.log(
            '=================================\n'
        );

        process.exit(0);

    }
    catch (error) {

        console.error(
            '\nSYSTEM VERIFICATION FAILED\n'
        );

        console.error(
            error
        );

        process.exit(1);
    }
})();