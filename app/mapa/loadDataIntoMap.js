// Carga datos al mapa y utiliza marker clusters

const loadDataIntoMap = async(query, map) => {
    var markers = L.markerClusterGroup({ chunkedLoading: true})
    var markerList = []

    const response = await fetch(query);
    response.json().then(
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
}
