FROM node:22 AS builder
WORKDIR /app
COPY package*.json ./
COPY shared/package*.json ./shared/
COPY services/analytics-service/package*.json ./services/analytics-service/
RUN npm ci
COPY . .
RUN npm run build --workspace=shared
RUN npx prisma generate \
    --schema=services/analytics-service/prisma/schema.prisma
RUN npm run build --workspace=analytics-service


FROM node:22-bookworm-slim AS runtime
WORKDIR /app
RUN apt-get update && \
    apt-get install -y openssl  postgresql-client && \
    rm -rf /var/lib/apt/lists/*
COPY package*.json ./
COPY shared/package*.json ./shared/
COPY services/analytics-service/package*.json ./services/analytics-service/
RUN npm ci --omit=dev
COPY --from=builder /app/shared/dist ./shared/dist
COPY --from=builder /app/services/analytics-service/dist ./dist
COPY --from=builder /app/services/analytics-service/generated ./generated
COPY --from=builder /app/services/analytics-service/prisma ./prisma
COPY scripts/docker/docker-entrypoint.sh ./docker-entrypoint.sh

RUN chmod +x docker-entrypoint.sh

EXPOSE 4001

ENTRYPOINT ["./docker-entrypoint.sh"]

CMD ["node", "dist/server.js"]