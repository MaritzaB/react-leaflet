import React from 'react'
import useSWR from 'swr'
import { MapaLeaflet } from './MapaLeaflet';

const fetcher = (...args) => fetch(...args).then(res => res.json())

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

const nfeatures = 500

const wlayer = 'albatross_filter'
const parameters = 'year:2018'

//const layer = 'temporadas_albatross'
//const viewparams = 'season:crianza'


const query = getServerQuery(wlayer, nfeatures, parameters)

export const MapaTrayectorias = () => {
    const { data, error, isLoading } = useSWR(query, fetcher)

    if (error) return <div>failed to load</div>
    if (isLoading) return <div>loading...</div>

    const coordenadas = []

    data.features.forEach(({properties}) => {
        console.log(properties.name)
        coordenadas.push(
            {
                latitude: properties.latitude,
                longitude: properties.longitude,
                albatross_id: `Albatross_id: ${properties.name}  Fecha: ${properties.date}`
            }
        )
    });

    console.log('Coordenadas array: ', coordenadas)
    console.log("Listo calisto")

    const guadalupeIsland = [28.883621, -118.292683]
    const defaultZoom = 6
    return (<MapaLeaflet center={guadalupeIsland} zoom={defaultZoom} puntos={coordenadas}/>)
    
}