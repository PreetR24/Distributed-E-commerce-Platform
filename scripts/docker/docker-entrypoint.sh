#!/bin/sh

set -e

echo ""
echo "==============================================="
echo "Starting ${SERVICE_NAME}"
echo "==============================================="
echo ""

echo "Waiting for PostgreSQL..."

until pg_isready \
    -h postgres \
    -p 5432 \
    -U postgres
do
    echo "PostgreSQL is not ready. Retrying in 2 seconds..."

    sleep 2
done

echo ""
echo "PostgreSQL is ready."
echo ""

echo "Running Prisma Migrations..."

npx prisma migrate deploy

echo ""
echo "Starting Application..."
echo ""

exec "$@"