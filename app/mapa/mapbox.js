mapboxgl.accessToken = 'pk.eyJ1IjoibWFyaXR6YWJlbGxvIiwiYSI6ImNrOXoxZ24wZTExanAza3Bia2dkemk3dXAifQ.xm2BhiCIbs4VMYzzPCZucA';

const centroMexicoCity = [19.432608, -99.133209];

const map = new mapboxgl.Map({
container: 'mapa_base', // container ID
style: 'mapbox://styles/mapbox/streets-v12', // style URL
center: [19.432608, 40], // starting position [lng, lat]
zoom: 10, // starting zoom
});
