import React, { useState } from 'react';
import { MapContainer } from 'react-leaflet'
import { OpenStreetMapTileLayer } from "./OpenStreetMapTileLayer";
import { MarkerMap } from "./MarkerMap";
import MarkerClusterGroup from 'react-leaflet-cluster';
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { format } from 'date-fns';

export const MapaLeaflet = ({center, zoom, puntos}) => {
    const [selectedDate, setselectedDate] = useState(new Date());

    const handleDateChange = date => {
      setSelectedDate(date);
    };

    const formatDate = date => {
      return date ? format(date, 'yyyy-MM-dd') : '';
    };

    return (
      <div>
      <h1>Mapa de negocios a la redonda de la estación con más afluencia del día</h1>
        <DatePicker
        calendarClassName="custom-calendar"
        selected={selectedDate}
        onChange={handleDateChange}
        />
      <p>Selected date: {formatDate(selectedDate)}</p>

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
