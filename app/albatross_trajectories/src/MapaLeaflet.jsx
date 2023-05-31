import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import { OpenStreetMapTileLayer } from "./OpenStreetMapTileLayer";

export const MapaLeaflet = ({center,zoom}) => {

    console.log(`Propiedades: ${center}`)
    return (

        <MapContainer center={center} zoom={zoom} >

        <OpenStreetMapTileLayer />
    
        <Marker position={center}>
          <Popup>
            Isla Guadalupe
          </Popup>
        </Marker>
        
        </MapContainer>
    )
}
