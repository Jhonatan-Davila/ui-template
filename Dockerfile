FROM node:10

# Create directory
RUN mkdir -p /opt/app
WORKDIR /opt/app

ENV APP_NAME app-ui

# Install dependencies
COPY package.json yarn.lock ./

RUN yarn

# Bundle source
COPY . .

# Start server
EXPOSE 8888

CMD [ "yarn", "start"]
