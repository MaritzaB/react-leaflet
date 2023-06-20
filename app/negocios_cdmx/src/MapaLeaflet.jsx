import React, { useState } from 'react';
import { MapContainer } from 'react-leaflet'
import { OpenStreetMapTileLayer } from "./OpenStreetMapTileLayer";
import { MarkerMap } from "./MarkerMap";
import MarkerClusterGroup from 'react-leaflet-cluster';
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

export const MapaLeaflet = ({center, zoom, puntos}) => {
    const [startDate, setStartDate] = useState(new Date());
    return (
      <div>
      <h1>Mapa de negocios a la redonda de la estación con más afluencia del día</h1>
        <DatePicker
        calendarClassName="custom-calendar"
        dateFormat="yyyy/MM/dd"
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        />

        <MapContainer center={center} zoom={zoom} >

        <OpenStreetMapTileLayer />
        {
          <MarkerClusterGroup chunkedLoading >
            {puntos.map(({index, latitude, longitude, nom_estab}) => 
              <MarkerMap 
                key={index}
                position={[latitude, longitude]} 
                text={nom_estab}
              />)}
          </MarkerClusterGroup>
        }  
        </MapContainer>
      </div>
    )
}
