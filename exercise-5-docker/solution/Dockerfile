FROM node:10.13-alpine
ENV NODE_ENV production 
ENV PORT 3000
WORKDIR /usr/src/app
COPY ["server/package.json", "server/package-lock.json*", "server/npm-shrinkwrap.json*", "./"]
RUN npm install --production --silent && mv node_modules ../
COPY server .
EXPOSE 3001
CMD npm start