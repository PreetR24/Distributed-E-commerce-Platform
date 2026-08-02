FROM node:22 AS builder
WORKDIR /app

COPY package*.json ./
COPY tsconfig*.json ./

COPY shared/package*.json ./shared/
COPY graphql-gateway/package*.json ./graphql-gateway/

RUN npm ci

COPY shared ./shared
COPY graphql-gateway ./graphql-gateway

RUN npm run build --workspace=shared
RUN npm run build --workspace=graphql-gateway


FROM node:22-alpine AS runtime
WORKDIR /app
COPY package*.json ./
COPY shared/package*.json ./shared/
COPY graphql-gateway/package*.json ./graphql-gateway/
RUN npm ci --omit=dev
COPY --from=builder /app/shared/dist ./shared/dist
COPY --from=builder /app/graphql-gateway/dist ./dist
EXPOSE 4010

CMD ["node", "dist/server.js"]