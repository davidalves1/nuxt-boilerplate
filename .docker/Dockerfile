FROM node:20.11.0-alpine3.19

# RUN adduser -D appuser
# USER appuser

WORKDIR /app

COPY package.json yarn.lock /app

RUN rm -rf /app/node_modules \
    && yarn install --frozen-lockfile

COPY . /app

EXPOSE 3000

CMD [ "yarn", "dev" ]