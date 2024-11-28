FROM node:22

WORKDIR /view

COPY . /view

RUN yarn install 

RUN apt-get update -y && apt-get install -y openssl

CMD yarn run dev
