// Obten el query des servidor
// http://localhost:8081/geoserver/curso_gis/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=curso_gis%3AqueryAzcapoData&maxFeatures=30&outputFormat=application%2Fjson&viewparams=
// claveMunicipio:007;claveActividad:465312;minyear:2003;maxyear:2010
const getServerQuery = (
        layer, maxFeatures, minyear, maxyear, claveActividad, claveMunicipio
        ) => {
    const urlServer = '127.0.0.1'
    const server = 'geoserver'
    const port = '8081'
    const workspace = 'curso_gis'
    const outputFormat = 'application%2Fjson'
    const viewparams = 'claveMunicipio:' + claveMunicipio 
                    + ';minyear:' + minyear
                    + ';maxyear:' + maxyear 
                    + ';claveActividad:' + claveActividad

    const query = `http://${urlServer}:${port}/${server}/` +
        `${workspace}/ows?service=WFS&version=1.0.0&` +
        `request=GetFeature&typeName=${workspace}%${layer}&` +
        `maxFeatures=${maxFeatures}&outputFormat=${outputFormat}` +
        `&viewparams=${viewparams}`

    console.log('El geoJSON es:')
    console.log(query)
    return query
}
