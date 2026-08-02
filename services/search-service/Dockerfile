FROM node:22 AS builder
WORKDIR /app

COPY package*.json ./
COPY tsconfig*.json ./

COPY shared ./shared/
COPY services/search-service ./services/search-service

RUN npm ci

COPY shared ./shared

RUN npm run build --workspace=shared
RUN npx prisma generate \
    --schema=services/search-service/prisma/schema.prisma
RUN npm run build --workspace=search-service


FROM node:22-bookworm-slim AS runtime
WORKDIR /app
RUN apt-get update && \
    apt-get install -y openssl ca-certificates postgresql-client && \
    rm -rf /var/lib/apt/lists/*
COPY package*.json ./
COPY shared/package*.json ./shared/
COPY services/search-service/package*.json ./services/search-service/
RUN npm ci --omit=dev
COPY --from=builder /app/shared/dist ./shared/dist
COPY --from=builder /app/shared/grpc-protos ./shared/grpc-protos
COPY --from=builder /app/services/search-service/dist ./dist
COPY --from=builder /app/services/search-service/generated ./generated
COPY --from=builder /app/services/search-service/prisma ./prisma
COPY scripts/docker/docker-entrypoint.sh ./docker-entrypoint.sh

RUN chmod +x docker-entrypoint.sh

EXPOSE 4007

ENTRYPOINT ["./docker-entrypoint.sh"]

CMD ["node", "dist/server.js"]