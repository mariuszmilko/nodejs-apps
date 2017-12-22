FROM node:8.9.3-slim

WORKDIR /code

# RUN npm install -g nodemon@1.12.5
# RUN npm install -g gulp-nodemon@2.2.1
RUN npm install -g gulp
RUN npm install -g gulp-nodemon@2.2.1

COPY ./ggleApp/package.json /code/package.json
RUN npm install && npm ls
RUN mv /code/node_modules /node_modules

COPY ./ggleApp /code

CMD ["npm", "start"]
