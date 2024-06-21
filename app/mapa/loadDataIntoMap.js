// Carga datos al mapa y utiliza marker clusters

const loadDataIntoMap = async(query, map) => {
    var markers = L.markerClusterGroup({ chunkedLoading: true, chunkProgress: updateProgressBar})
    var markerList = []

    const response = await fetch(query);

    response.json().then(
            (data) => {
                data.features.map((elemento, index) => {
                    //console.log(elemento)
                    const { nom_estab, latitud: lat, longitud: lng } = elemento.properties
                    const coordinates = [lat, lng]
    
                    //console.log(`Coordenadas del punto ${index}: [${lat}, ${lng}]`)
    
                    var marker = L.marker(coordinates).bindPopup(`Establecimiento: <br> ${nom_estab}`) 
    
                    markerList.push(marker)
    
                })
    
                markers.addLayers(markerList);
                map.addLayer(markers);
            }
        ).catch(
            (error) => {
                console.log(`No se pueden obtener los datos de ${query}`)
            }
        )
}

// const createMarkerCluster = (municipioList = [], map, progressBar = null, maxFeatures) => {
//     var markers = null;
//     if (progress && progressBar)
//         markers. L.markerClusterGroup({ chunkedLoading: true, chunkProgress: updateProgressBar});
//     else
//     markers. L.markerClusterGroup({ chunkedLoading: false});
//     municipioList.forEach(
//         layer => {loadDataIntoMap(
//             getServerQuery(
//                 layer, maxFeatures, minyear, maxyear, claveActividad, claveMunicipio
//                 )
//                 )
//         })
// }
