FROM node:20-alpine AS base
WORKDIR /CRM/apps

# ---------- Dependencies ----------
FROM base AS deps

COPY package*.json ./
COPY apps/api/package*.json ./api/
COPY packages/shared/package*.json ./packages/shared/
COPY packages/shared /apps/packages

WORKDIR /CRM/apps/api

RUN npm install
# ---------- Build ----------
FROM base AS build
WORKDIR /CRM/apps/api

COPY --from=deps CRM/apps/api/node_modules ./node_modules

COPY /apps/api .

COPY ../../packages ../../packages

COPY ../../tsconfig.base.json ../../
#api
RUN ls

RUN npm run build

ENV NODE_ENV=production

EXPOSE 4000

CMD ["npm", "run", "start"]