FROM node:14-buster

RUN apt-get update -y \
  && apt-get install -y curl openjdk-11-jre-headless \
  && apt-get clean \
  && npm install -g firebase-tools \
  && rm -rf /var/lib/apt/lists/* \
  && mkdir functions

COPY ./package*.json ./
COPY ./functions/package*.json ./functions/
