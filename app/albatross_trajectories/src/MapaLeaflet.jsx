import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import { OpenStreetMapTileLayer } from "./OpenStreetMapTileLayer";
import { MarkerMap } from "./MarkerMap";
import MarkerClusterGroup from 'react-leaflet-cluster';

export const MapaLeaflet = ({center, zoom, puntos}) => {

    return (

        <MapContainer center={center} zoom={zoom} >

        <OpenStreetMapTileLayer />
        {
          <MarkerClusterGroup chunkedLoading >
            {puntos.map(({index, latitude, longitude, albatross_id}) => 
              <MarkerMap 
                key={index}
                position={[latitude, longitude]} 
                text={albatross_id}
              />)}
          </MarkerClusterGroup>
        }
        
        </MapContainer>
    )
}
