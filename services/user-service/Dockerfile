FROM node:22 AS builder

WORKDIR /app

COPY package*.json ./
COPY tsconfig*.json ./

COPY shared ./shared/
COPY services/user-service ./services/user-service

RUN npm ci

COPY shared ./shared

RUN npm run build --workspace=shared
RUN npx prisma generate \
    --schema=services/user-service/prisma/schema.prisma
RUN npm run build --workspace=user-service


FROM node:22-bookworm-slim AS runtime
WORKDIR /app
RUN apt-get update && \
    apt-get install -y openssl ca-certificates postgresql-client && \
    rm -rf /var/lib/apt/lists/*
COPY package*.json ./
COPY shared/package*.json ./shared/
COPY services/user-service/package*.json ./services/user-service/
RUN npm ci --omit=dev
COPY --from=builder /app/shared/dist ./shared/dist
COPY --from=builder /app/services/user-service/dist ./dist
COPY --from=builder /app/services/user-service/generated ./generated
COPY --from=builder /app/services/user-service/prisma ./prisma
COPY scripts/docker/docker-entrypoint.sh ./docker-entrypoint.sh

RUN chmod +x docker-entrypoint.sh

RUN chown -R 1000:1000 /app

USER 1000:1000

EXPOSE 4001

ENTRYPOINT ["./docker-entrypoint.sh"]

CMD ["node", "dist/server.js"]