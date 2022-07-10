FROM node:16
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
CMD [ "npm", "start" ]

# se crea la imagen usando el Dockerfile
# docker build -t proyecto-backend-market .

# se inicia el contenedor interactuando con consola(-it) en el puerto 4000(-p)
# docker run -it -p 4000:3000 proyecto-backend-market