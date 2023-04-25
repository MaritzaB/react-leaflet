// http://localhost:8081/geoserver/curso_gis/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=curso_gis%3Adenue_inegi_09_&maxFeatures=50&outputFormat=application%2Fjson

const workingLayer = '3Adenue_inegi_09_'
const maximumFeatures = '50'
const query = getServerQuery(workingLayer, maximumFeatures)

var markers = L.markerClusterGroup({ chunkedLoading: true})
var markerList = []

// Build query

fetch(query).then(
    response => response.json()).then(
        (data) => {
            data.features.map((elemento, index) => {
                // console.log(elemento)
                const { latitud: lat, longitud: lng } = elemento.properties
                const coordinates = [lat, lng]

                console.log(`Coordenadas del punto ${index}: [${lat}, ${lng}]`)

                const marker = L.marker(coordinates).addTo(map)

                marker.bindPopup(`Posición: <b>${lat},${lng}</b>`)

                markerList.push(marker)

            })

            markers.addLayers(markerList);
            map.addLayer(markers);
        }
    )
