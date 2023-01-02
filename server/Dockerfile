FROM node:12
WORKDIR /app
COPY package.jason /app
RUN npm install
COPY . /app
EXPOSE 8000
CMD ["node","express.js"]