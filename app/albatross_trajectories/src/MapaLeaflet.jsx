import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import { OpenStreetMapTileLayer } from "./OpenStreetMapTileLayer";
import { MarkerMap } from "./MarkerMap";

export const MapaLeaflet = ({center, zoom, puntos}) => {

    return (

        <MapContainer center={center} zoom={zoom} >

        <OpenStreetMapTileLayer />
        {
            puntos.map((coordenadas, index) => <MarkerMap position={coordenadas} text={index}/>)
        }
        
        </MapContainer>
    )
}
