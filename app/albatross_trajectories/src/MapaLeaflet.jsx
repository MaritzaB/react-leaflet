import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import { OpenStreetMapTileLayer } from "./OpenStreetMapTileLayer";
import { MarkerMap } from "./MarkerMap";

export const MapaLeaflet = ({center,zoom}) => {

    console.log(`Propiedades: ${center}`)
    return (

        <MapContainer center={center} zoom={zoom} >

        <OpenStreetMapTileLayer />
    
        <MarkerMap position={center} text={<span>Área de anidamientos de los <br/> Albatros de Layssan</span>} />
        
        </MapContainer>
    )
}
