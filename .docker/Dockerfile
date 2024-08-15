FROM node:20.11.0-alpine3.19

# USER root
RUN npm install -g pnpm

# RUN adduser -D appuser
# USER appuser

WORKDIR /app

COPY package.json pnpm-lock.yaml /app

RUN rm -rf /app/node_modules \
    && pnpm install --frozen-lockfile

COPY . /app

EXPOSE 3000

CMD [ "pnpm", "dev" ]