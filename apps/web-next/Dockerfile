FROM node:20-alpine AS base
WORKDIR /CRM/apps

# ---------- Dependencies ----------
FROM base AS deps

COPY package*.json ./
COPY apps/web/package*.json ./web/
COPY packages/shared/package*.json ./packages/shared/
COPY packages/shared /apps/packages

WORKDIR /CRM/apps/web

RUN npm install
# ---------- Build ----------
FROM base AS build
WORKDIR /CRM/apps/web

COPY --from=deps CRM/apps/web/node_modules ./node_modules

COPY /apps/web .

COPY ../../packages ../../packages

RUN npm run build


ENV NODE_ENV=production

EXPOSE 3000

CMD ["npm", "run", "start"]