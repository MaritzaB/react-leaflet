import React, { useState } from 'react';
import { MapContainer } from 'react-leaflet'
import { OpenStreetMapTileLayer } from "./OpenStreetMapTileLayer";
import { MarkerMap } from "./MarkerMap";
import MarkerClusterGroup from 'react-leaflet-cluster';
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { format } from 'date-fns';

export const MapaLeaflet = ({center, zoom, puntos}) => {
    return (
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
    )
}
