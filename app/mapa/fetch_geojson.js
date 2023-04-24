// http://localhost:8081/geoserver/curso_gis/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=curso_gis%3Adenue_inegi_09_&maxFeatures=50&outputFormat=application%2Fjson

const workingLayer = '3Adenue_inegi_09_'
const maximumFeatures = '50'

const getServerQuery = (layer, maxFeatures) => {
    const urlServer = '127.0.0.1'
    const server = 'geoserver'
    const port = '8081'
    const workspace = 'curso_gis'
    const outputFormat = 'application%2Fjson'

    const query = `http://${urlServer}:${port}/${server}/${workspace}/ows?service=WFS&version=1.0.0&` +
        `request=GetFeature&typeName=${workspace}%${layer}&maxFeatures=${maxFeatures}&outputFormat=${outputFormat}`

    console.log('El geoJSON es:')
    console.log(query)
    return query
}

const query = getServerQuery(workingLayer, maximumFeatures)
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

            })
        }
    )
