import React from "react";
import { Marker, Popup } from "react-leaflet";
import * as L from "leaflet";

// Para regresar el icono a su estado original, quitar icon={icon}

export const MarkerMap = ({key, position, text}) => {
  const LeafIcon = L.Icon.extend({
    options: {}
  });
  
  const icon = new LeafIcon({
      iconUrl:
        "https://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|abcdef&chf=a,s,ee00FFFF"
    });

    return (
        <Marker key={key} position={position} icon={icon}>
        <Popup>
          {text}
        </Popup>
      </Marker>
    )
}
