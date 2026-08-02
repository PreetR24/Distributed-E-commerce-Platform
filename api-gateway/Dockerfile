FROM node:22 AS builder

WORKDIR /app

COPY package*.json ./
COPY tsconfig*.json ./

COPY shared/package*.json ./shared/
COPY api-gateway/package*.json ./api-gateway/

RUN --mount=type=cache,target=/root/.npm npm ci

COPY shared ./shared
COPY api-gateway ./api-gateway

RUN npm run build --workspace=shared
RUN npm run build --workspace=api-gateway

FROM node:22-alpine AS runtime
WORKDIR /app
COPY package*.json ./
COPY shared/package*.json ./shared/
COPY api-gateway/package*.json ./api-gateway/
RUN --mount=type=cache,target=/root/.npm npm ci --omit=dev
COPY --from=builder /app/shared/dist ./shared/dist
COPY --from=builder /app/api-gateway/dist ./dist
EXPOSE 3000

CMD ["node", "dist/server.js"]