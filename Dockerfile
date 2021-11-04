FROM node:13.12.0-alpine

LABEL maintainer="Bernard Thompson bernardthompson83@gmail.com"

WORKDIR /src
ADD package.json /src 
RUN npm install
COPY . .
RUN npm run build 

CMD ["npm", "start"]