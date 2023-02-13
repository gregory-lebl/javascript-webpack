FROM node:lts
WORKDIR /app
COPY package*.json .
RUN npm install
COPY . .
RUN npm run build:dev
CMD [ "npm", "start" ]
EXPOSE 8080