FROM node:12.2.0-alpine
COPY . .
RUN npm i
EXPOSE 80
CMD [ "npm", "start" ]