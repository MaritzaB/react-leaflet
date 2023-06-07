import React from 'react'
import useSWR from 'swr'
import { MapaLeaflet } from './MapaLeaflet';

const fetcher = (...args) => fetch(...args).then(res => res.json())

const getServerQuery = () => {
    return(
        "http://localhost:8081/geoserver/curso_gis/ows?" +
        "service=WFS&" +
        "version=1.0.0&" +
        "request=GetFeature&" +
        "typeName=curso_gis%3Atemporadas_albatross&" +
        "maxFeatures=500&" +
        "outputFormat=application%2Fjson&" +
        "viewparams=season:crianza"
    );
}


export const MapaTrayectorias = () => {
    const { data, error, isLoading } = useSWR(getServerQuery(), fetcher)

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
