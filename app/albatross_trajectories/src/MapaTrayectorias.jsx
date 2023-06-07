import React from 'react'
import useSWR from 'swr'
import { MapaLeaflet } from './MapaLeaflet';

const fetcher = (...args) => fetch(...args).then(res => res.json())


const getServerQuery = () => {
    const urlServer = 'localhost:8081'
    const server = 'geoserver'
    const workspace = 'curso_gis'
    //const layer = 'temporadas_albatross'
    const layer = 'albatross_filter'
    const maxFeatures = 1000
//    const viewparams = 'season:crianza'
    const viewparams = 'year:2018'
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

const query = getServerQuery()

export const MapaTrayectorias = () => {
    const { data, error, isLoading } = useSWR(query, fetcher)

    if (error) return <div>failed to load</div>
    if (isLoading) return <div>loading...</div>

    const coordenadas = []

    data.features.forEach(element => {
        console.log(element.properties.latitude, element.properties.longitude)
        coordenadas.push([element.properties.latitude, element.properties.longitude])
    });

    console.log('Coordenadas array: ', coordenadas)
    console.log("Listo calisto")

    const guadalupeIsland = [28.883621, -118.292683]
    const defaultZoom = 9
    return (<MapaLeaflet center={guadalupeIsland} zoom={defaultZoom} puntos={coordenadas}/>)
    
}
