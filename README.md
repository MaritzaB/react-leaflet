# react-leaflet

1. Para construir la imagen corremos:

```
$ docker build . -t ejemplo-node
```
1. Para correr el contenedor:

```
$ docker run -it -p 5173:5173 --name react_vite --volume ${PWD}/app:/app ejemplo-node bash
```
1. Listar los contenedores
```
$ docker container ls -la
```
