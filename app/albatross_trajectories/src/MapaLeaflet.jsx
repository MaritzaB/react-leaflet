import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

export const MapaLeaflet = (props) => {

    console.log(`Propiedades: ${props.center}`)
    return (

        <MapContainer center={ props.center } zoom={ props.zoom } >

        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
    
        <Marker position={ props.center }>
          <Popup>
            Isla Guadalupe
          </Popup>
        </Marker>
        
        </MapContainer>
    )
}
