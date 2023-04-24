// http://localhost:8081/geoserver/curso_gis/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=curso_gis%3Adenue_inegi_09_&maxFeatures=50&outputFormat=application%2Fjson

const workingLayer = '3Adenue_inegi_09_'
const maximumFeatures = '2'

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
        (data) => { console.log(data) }
    )
