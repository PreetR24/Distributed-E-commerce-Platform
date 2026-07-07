FROM node:22 AS builder
WORKDIR /app
COPY package*.json ./
COPY shared/package*.json ./shared/
COPY services/cart-service/package*.json ./services/cart-service/
RUN --mount=type=cache,target=/root/.npm npm ci
COPY . .
RUN npm run build --workspace=shared
RUN npm run build --workspace=cart-service

FROM node:22-bookworm-slim AS runtime
WORKDIR /app
COPY package*.json ./
COPY shared/package*.json ./shared/
COPY services/cart-service/package*.json ./services/cart-service/
RUN --mount=type=cache,target=/root/.npm npm ci --omit=dev
COPY --from=builder /app/shared/dist ./shared/dist
COPY --from=builder /app/services/cart-service/dist ./dist

EXPOSE 4003

CMD ["node", "dist/server.js"]