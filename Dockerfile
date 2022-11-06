FROM node:14-alpine
WORKDIR /app
COPY . .
CMD NODE_URLS=https://*:$PORT npm start