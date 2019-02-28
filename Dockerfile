FROM node:10-alpine

# set maintainer
LABEL maintainer "test"

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY server.js ./
COPY package.json ./

RUN npm install 


EXPOSE 80
CMD [ "npm", "start" ]
