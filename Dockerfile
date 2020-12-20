FROM node:13.14.0-alpine

WORKDIR /app

COPY ./ ./

RUN npm install

EXPOSE 80

CMD npm run start