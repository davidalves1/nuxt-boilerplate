FROM node:20.11.0 as builder

WORKDIR /src

COPY . .

RUN yarn install \
  --prefer-offline \
  --frozen-lockfile \
  --non-interactive \
  --production=false

RUN yarn build

RUN rm -rf node_modules && \
  NODE_ENV=production yarn install \
  --prefer-offline \
  --pure-lockfile \
  --non-interactive \
  --production=true

FROM node:20.11.0-alpine3.19

WORKDIR /src

COPY --from=builder /src  .

ENV HOST 0.0.0.0
EXPOSE 3000

CMD [ "yarn", "start" ]