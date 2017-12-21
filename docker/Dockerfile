FROM node:9.2.0-alpine

WORKDIR /code

RUN npm install -g nodemon@1.12.5

COPY ./app/package.json /code/package.json
RUN npm install && npm ls
RUN mv /code/node_modules /node_modules

COPY ./app /code

CMD ["npm", "start"]