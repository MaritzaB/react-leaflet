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
    console.log(query)
    return(
        query
    );
}


const nfeatures = 50000
const fecha = '2023-03-22'
const wlayer = 'max_afluence'
const parameters = 'date:' + fecha

const query = getServerQuery(wlayer, nfeatures, parameters)

export const MapaNegociosMetro = () => {
    
    const { data, error, isLoading } = useSWR(query, fetcher)

    if (error) return <div>failed to load</div>
    if (isLoading) return <div>loading...</div>

    const coordenadas = []

    data.features.forEach(({properties}) => {
        coordenadas.push(
            {
                latitude: properties.latitud,
                longitude: properties.longitud,
                nom_estab: properties.nom_estab
            }
        )
    });

    console.log('Coordenadas array: ', coordenadas)

    const centerPoint = [19.432608, -99.133209]
    const defaultZoom = 12
    return (
        <MapaLeaflet center={centerPoint} zoom={defaultZoom} puntos={coordenadas}/>
        )
    
}
