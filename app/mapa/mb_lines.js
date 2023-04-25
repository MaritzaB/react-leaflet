//http://localhost:8081/geoserver/curso_gis/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=curso_gis%3AMetrobus_lineas_utm14n&maxFeatures=50&outputFormat=application%2Fjson

const workingLayer = '3AMetrobus_lineas_utm14n'
const maximumFeatures = '5'

const query = getServerQuery(workingLayer, maximumFeatures)

//var myLineas = [{
//    "type": "LineString",
//    "coordinates": [[-100, 40], [-105, 45], [-110, 55]]
//}, {
//    "type": "LineString",
//    "coordinates": [[-105, 40], [-110, 45], [-115, 55]]
//}];
//L.geoJSON(myLineas).addTo(map);


fetch(query).then(
    response => response.json()).then(
        (data) => {
            console.log(data)
            // Recupera la información para cargar en el mapa
            data.features.map((element, index) => {
                const {type} = element.geometry;
                const cords = [`"coordinates":`, element.geometry.coordinates];
                console.log({type})
                console.log(cords)
                var myLines = [
                    {type},
                    cords
                ]
                L.geoJSON(myLines).addTo(map);
            })
        }
    )

//L.geoJSON(query).addTo(mapa_base);



