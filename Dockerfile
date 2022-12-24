FROM node:lts as build-stage
WORKDIR /app
RUN npm install tyarn -g
COPY package*.json ./
RUN tyarn
COPY . .
RUN npx prisma generate && \
    npm run build

# production stage
FROM node:lts-alpine as production-stage
WORKDIR /app
COPY --from=build-stage /app/dist ./dist
COPY --from=build-stage /app/node_modules ./node_modules
EXPOSE 3000
CMD ["node", "./dist/main"]