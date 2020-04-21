FROM node:12.14

ARG STEP_URL
WORKDIR /home/jfrog/app
ADD . /home/jfrog/app
ENV STEP_URL=${STEP_URL}
RUN npm install
ENTRYPOINT node /home/jfrog/app/server.js

EXPOSE 80
