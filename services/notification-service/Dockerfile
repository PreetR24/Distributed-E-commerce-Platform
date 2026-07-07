FROM node:22 AS builder
WORKDIR /app
COPY package*.json ./
COPY shared/package*.json ./shared/
COPY services/notification-service/package*.json ./services/notification-service/
RUN --mount=type=cache,target=/root/.npm npm ci
COPY . .
RUN npm run build --workspace=shared
RUN npx prisma generate \
    --schema=services/notification-service/prisma/schema.prisma
RUN npm run build --workspace=notification-service


FROM node:22-bookworm-slim AS runtime
WORKDIR /app
RUN apt-get update && \
    apt-get install -y openssl ca-certificates postgresql-client && \
    rm -rf /var/lib/apt/lists/*
COPY package*.json ./
COPY shared/package*.json ./shared/
COPY services/notification-service/package*.json ./services/notification-service/
RUN --mount=type=cache,target=/root/.npm npm ci --omit=dev
COPY --from=builder /app/shared/dist ./shared/dist
COPY --from=builder /app/services/notification-service/dist ./dist
COPY --from=builder /app/services/notification-service/generated ./generated
COPY --from=builder /app/services/notification-service/prisma ./prisma
COPY scripts/docker/docker-entrypoint.sh ./docker-entrypoint.sh

RUN chmod +x docker-entrypoint.sh

EXPOSE 4009

ENTRYPOINT ["./docker-entrypoint.sh"]

CMD ["node", "dist/server.js"]