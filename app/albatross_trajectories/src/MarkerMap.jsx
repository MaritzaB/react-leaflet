import React from "react";
import { Marker, Popup } from "react-leaflet";



export const MarkerMap = ({position, text}) => {
    return (
        <Marker position={position}>
        <Popup>
          {text}
        </Popup>
      </Marker>
    )
}
