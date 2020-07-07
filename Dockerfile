# REFERENCES
# https://github.com/nodejs/docker-node/blob/master/README.md#how-to-use-this-image
# https://nodejs.org/de/docs/guides/nodejs-docker-webapp/
# https://medium.com/better-programming/9-tips-for-local-node-js-development-using-docker-compose-19789f44158

FROM node:14

ENV NODE_ENV=development

WORKDIR /home/node/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./
COPY typings.json ./

# https://www.neekey.net/2016/12/05/how-to-fix-npm-warn-cannot-run-in-wd/
RUN npm install --unsafe-perm
