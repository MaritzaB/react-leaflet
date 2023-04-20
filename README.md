# react-leaflet

1. Para construir la imagen corremos:

```
$ docker build . -t ejemplo-node
```

1. Para correr el contenedor:

```
$ docker run --rm -it -p 5173:5173 --name react_vite --volume ${PWD}/app:/app ejemplo-node bash
```

1. Listar los contenedores

```
$ docker container ls -la
```

---

Podemos desplegar la applicación ya sea con el instalador de `npm` o con el de
`yarn`. En teoría `npm` tiene una mayor cantidad de módulos que `yarn`, lo que
hace que el segundo sea más rápido. Es conveniente usar un solo instalador en
cada proyecto para que no tengamos problemas de instalación.

### Comandos para `npm`
```
$ npm create vite@latest
```
```
$ npm install
```
```
$ npm run dev
```

### Comandos para `yarn`
```
$ yarn create vite
```
```
$ yarn
```
```
$ yarn dev
```
---


## Might be useful:

[Dockerizing a React application with NodeJS, Postgress n Nginx |dev & prod|](https://www.youtube.com/watch?v=-pTel5FojAQ)

[Introducción a Vite, + Deploy en Github Pages](https://www.youtube.com/watch?v=UX4gvort2TU)

[NGINX Crash Course](https://www.youtube.com/watch?v=7VAI73roXaY)

---

### Para la API REST

[NodeJS Crea una REST API escalable y sostenible con Typescript y express](https://www.youtube.com/watch?v=T1QFGwOnQxQ)

---

## Mapas que podemos utilizar


## JavaScript and TypeScript

Muchas veces el tipo de dato en JavaScript es de tipo `any` lo que causa mucho
problema a nivel de servidores, sobre todo en el intercambio de información con
servidores en JSON.
Microsoft definió un nuevo lenguaje llamado TypeScript, lo que hace es que trata
de solventar las limitantes de JS. De hecho lo que ocurre internamente cuando un
código es escrito en JavaScript es que ocurre una _transpilación_ (traducción de
TS a JS).
