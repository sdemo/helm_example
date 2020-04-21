FROM node:12.14

ADD . /home/jfrog/app
ENTRYPOINT node /home/jfrog/app/server.js

EXPOSE 80
