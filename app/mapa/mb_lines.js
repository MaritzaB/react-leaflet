//http://localhost:8081/geoserver/curso_gis/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=curso_gis%3AMetrobus_lineas_utm14n&maxFeatures=50&outputFormat=application%2Fjson

const workingLayer = '3AMetrobus_lineas_utm14n'
const maximumFeatures = '63'

const query = getServerQuery(workingLayer, maximumFeatures)

fetch(query).then(
    function (response) {
        return response.json();
    }).then(
        function (data) {
            L.geoJSON(data).addTo(map);
        }
    )
