FROM node:14
WORKDIR /ApiFalabella
COPY package*.json ./
RUN npm install
COPY . .
CMD ["npm", "start"]
