import React, { useState } from 'react';
import useSWR from 'swr'
import { MapaLeaflet } from './MapaLeaflet';
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { format } from 'date-fns';

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


export const MapaNegociosMetro = () => {

    const [selectedDate, setselectedDate] = useState(new Date(2023, 2, 22));

    const handleDateChange = date => {
      setselectedDate(date);
    };

    const formatDate = date => {
      return date ? format(date, 'yyyy-MM-dd') : '';
    };
    console.log('Fecha seleccionada', formatDate(selectedDate))

    const nfeatures = 50000
    const wlayer = 'max_afluence'
    const parameters = 'date:' + formatDate(selectedDate)

    const query = getServerQuery(wlayer, nfeatures, parameters)

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
        <div>
        <h1>
            Mapa de negocios a la redonda de la estación del metro con 
            mayor afluencia en la CDMX
        </h1>
        <DatePicker
            calendarClassName="custom-calendar"
            selected={selectedDate}
            onChange={handleDateChange}
        />
        <p>Fecha seleccionada: {formatDate(selectedDate)}</p>
        <MapaLeaflet center={centerPoint} zoom={defaultZoom} puntos={coordenadas}/>
        </div>
        )
    
}
