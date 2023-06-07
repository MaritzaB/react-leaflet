import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import { OpenStreetMapTileLayer } from "./OpenStreetMapTileLayer";
import { MarkerMap } from "./MarkerMap";

export const MapaLeaflet = ({center, zoom}) => {

    const ejemplo = [[28.117638,-115.157151], [31.736051,-116.294682], [30.985556,-119.044815]]
    return (

        <MapContainer center={center} zoom={zoom} >

        <OpenStreetMapTileLayer />
        {
            ejemplo.map((coordenadas, index) => <MarkerMap position={coordenadas} text={index}/>)
        }
        
        </MapContainer>
    )
}
