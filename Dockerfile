# syntax=docker/dockerfile:1

FROM node:18-alpine

WORKDIR /app

COPY src/ /comdshrat/src
COPY package.json /comdshrat/
COPY . .

RUN npm install

RUN npm run build

EXPOSE 3303

CMD [ "npm", "start" ]