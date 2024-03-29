FROM node:18.12.0-alpine

# create destination directory
RUN mkdir -p /home/nuxt
WORKDIR /home/nuxt

# copy the app, note .dockerignore
COPY . /home/nuxt/
RUN npm install
RUN npm run build

EXPOSE 3000

CMD [ "npm", "run", "start" ]