FROM node:22-alpine AS builder

WORKDIR /app

COPY package*.json ./

COPY shared/package*.json ./shared/

RUN npm install

COPY . .

RUN npm run build --workspace=shared