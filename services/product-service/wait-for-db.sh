#!/bin/sh

set -e

echo "Checking PostgreSQL..."

until pg_isready \
    -h postgres \
    -p 5432 \
    -U postgres
do
    echo "Waiting for PostgreSQL..."

    sleep 2
done

echo "PostgreSQL is accepting connections."