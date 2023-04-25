
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
