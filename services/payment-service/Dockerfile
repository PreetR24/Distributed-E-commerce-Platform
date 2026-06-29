FROM node:22 AS builder
WORKDIR /app
COPY package*.json ./
COPY shared/package*.json ./shared/
COPY services/payment-service/package*.json ./services/payment-service/
RUN npm ci
COPY . .
RUN npm run build --workspace=shared
RUN npx prisma generate \
    --schema=services/payment-service/prisma/schema.prisma
RUN npm run build --workspace=payment-service


FROM node:22-bookworm-slim AS runtime
WORKDIR /app
RUN apt-get update && \
    apt-get install -y openssl ca-certificates && \
    rm -rf /var/lib/apt/lists/*
COPY package*.json ./
COPY shared/package*.json ./shared/
COPY services/payment-service/package*.json ./services/payment-service/
RUN npm ci --omit=dev
COPY --from=builder /app/shared/dist ./shared/dist
COPY --from=builder /app/shared/grpc-protos ./shared/grpc-protos
COPY --from=builder /app/services/payment-service/dist ./dist
COPY --from=builder /app/services/payment-service/generated ./generated
COPY --from=builder /app/services/payment-service/prisma ./prisma
EXPOSE 4005

CMD ["node", "dist/server.js"]