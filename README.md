# react-leaflet

1. Para construir la imagen corremos:

```
$ docker build . --tag ejemplo-node
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

## Displaying a map with React - Leaflet

1. [Part 1](https://www.youtube.com/watch?v=62Y8SFi2wBk)
2. [Part 2](https://www.youtube.com/watch?v=cK7zIoC4lEY)
3. [Part 3](https://www.youtube.com/watch?v=fn-Dz9OZWJM)

[App en GitHub pages](https://github.com/gitname/react-gh-pages)
[Tutorial react leaflet](https://www.geopois.com/tutoriales/webmapping/leaflet/react-leaflet/)
[Ejemplo de GitHub](https://codesandbox.io/s/great-pine-293632?file=/src/App.js:385-540)
[Tutoriales](https://github.com/colbyfayock/launchtime-workshop/tree/master/lessons/03%20-%20Customizing%20Your%20React%20Leaflet%20Map%20with%20a%20Mapbox%20Basemap%20Style)
[Build maps with react leaflet](https://egghead.io/lessons/react-add-geojson-location-data-to-a-react-leaflet-map-with-a-geojson-instance)
[Mapping with react leaflet](https://egghead.io/lessons/react-customize-geojson-data-markers-with-a-react-leaflet-icon-image)
[Codesandbox](https://codesandbox.io/search?refinementList%5Btemplate%5D=&refinementList%5Bnpm_dependencies.dependency%5D%5B0%5D=react-leaflet&page=3&configure%5BhitsPerPage%5D=12)
[Custom marker with React-Leaflet](https://codewithwolf.com/how-to-change-marker-color-react-leaflet)
[Custom marker cluster react leaflet](https://akursat.gitbook.io/marker-cluster/examples/custom-marker-clusters)