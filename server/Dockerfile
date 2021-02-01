FROM node:12-alpine
FROM mongo-express
WORKDIR /app
COPY pakage*.json /app
RUN npm install
COPY . /app
CMD ["npm", "start"]
EXPOSE 3000