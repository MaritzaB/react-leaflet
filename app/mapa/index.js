console.log('Camara gente')

var osmTiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
});
const centroMexicoCity = [19.432608, -99.133209];
var map = L.map('mapa_base').addLayer(osmTiles).setView(centroMexicoCity, 15);
