# build stage
FROM node:lts-alpine

# set the current working directory
WORKDIR /usr/src/app

# set environment variables
ENV HOST=0.0.0.0
ENV PORT=8080

# install simple http server for serving static content
RUN yarn global add http-server

# copy 'package.json' and 'yarn.lock'
COPY package*.json .
COPY yarn.lock .

# install project dependencies
RUN yarn install

# copy project files and folders to the container
COPY . .

# build app for production
RUN yarn build

# make the container port accessible externally
EXPOSE 8080

# start the service
CMD [ "http-server", "build" ]