#!/bin/sh

set -e

echo ""
echo "==============================================="
echo "Starting ${SERVICE_NAME}"
echo "==============================================="
echo ""

echo "Waiting for PostgreSQL..."

until npx prisma migrate status > /dev/null 2>&1
do
    echo "Database is not ready. Retrying in 2 seconds..."

    sleep 2
done

echo ""
echo "PostgreSQL is ready."
echo ""

echo "Running Prisma Migrations..."

npx prisma migrate deploy

echo ""
echo "Generating Prisma Client..."

npx prisma generate

echo ""
echo "Starting Application..."
echo ""

exec "$@"