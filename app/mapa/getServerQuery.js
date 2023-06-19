// Obten el query des servidor
// http://localhost:8081/geoserver/curso_gis/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=curso_gis%3AqueryAzcapoData&maxFeatures=30&outputFormat=application%2Fjson&viewparams=
// claveMunicipio:007;claveActividad:465312;minyear:2003;maxyear:2010

const getServerQuery = (layer, maxFeatures, viewparams) => {
    const urlServer = 'localhost:8081'
    const server = 'geoserver'
    const workspace = 'curso_gis'
    const query = 
        `http://${urlServer}/${server}/${workspace}/ows?` +
        "service=WFS&" +
        "version=1.0.0&" +
        "request=GetFeature&" +
        `typeName=${workspace}%3A${layer}&` +
        `maxFeatures=${maxFeatures}&` +
        "outputFormat=application%2Fjson&" +
        `viewparams=${viewparams}`

    return(
        query
    );
}