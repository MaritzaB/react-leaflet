import React from "react";
import { Marker, Popup } from "react-leaflet";

export const MarkerMap = ({position, text}) => {
    console.log(`pone marcador`)
    return (
        <Marker position={position}>
        <Popup>
          {text}
        </Popup>
      </Marker>
    )
}
