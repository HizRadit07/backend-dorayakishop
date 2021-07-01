FROM node:14
WORKDIR /app
# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json /app

RUN npm install

COPY . /app

CMD ["npm", "start"]
