FROM node:lts-buster
RUN git clone https://github.com/devpopkid/XTECH-BOT/root/popkidxmd
WORKDIR /root/popkidxmd
RUN npm install && npm install -g pm2 || yarn install --network-concurrency 1
COPY . .
EXPOSE 9090
CMD ["npm", "start"]
