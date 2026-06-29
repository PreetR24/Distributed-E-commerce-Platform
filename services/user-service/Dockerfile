FROM node:22 AS builder
WORKDIR /app
COPY package*.json ./
COPY shared/package*.json ./shared/
COPY services/user-service/package*.json ./services/user-service/
RUN npm ci
COPY . .
RUN npm run build --workspace=shared
RUN npx prisma generate \
    --schema=services/user-service/prisma/schema.prisma
RUN npm run build --workspace=user-service


FROM node:22-bookworm-slim AS runtime
WORKDIR /app
RUN apt-get update && \
    apt-get install -y openssl ca-certificates && \
    rm -rf /var/lib/apt/lists/*
COPY package*.json ./
COPY shared/package*.json ./shared/
COPY services/user-service/package*.json ./services/user-service/
RUN npm ci --omit=dev
COPY --from=builder /app/shared/dist ./shared/dist
COPY --from=builder /app/services/user-service/dist ./dist
COPY --from=builder /app/services/user-service/generated ./generated
COPY --from=builder /app/services/user-service/prisma ./prisma
EXPOSE 4001

CMD ["node", "dist/server.js"]