FROM node:6.10.3

RUN apt-get -y update

RUN apt-get -y install vim

COPY src /opt/app

CMD ["node", "/opt/app/index.js"]
