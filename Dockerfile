FROM node:latest

WORKDIR /app

CMD ["cd mapa/", "npm run dev"]
