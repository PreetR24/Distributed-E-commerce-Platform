import {
    PrismaClient
}
from '../../services/user-service/generated/prisma';

export const verifyPostgres =
async () => {

    console.log(
        '\nVerifying PostgreSQL...\n'
    );

    const prisma =
        new PrismaClient();

    await prisma.$queryRaw`
        SELECT 1
    `;

    console.log(
        '✓ PostgreSQL Connected'
    );

    await prisma.$disconnect();
};