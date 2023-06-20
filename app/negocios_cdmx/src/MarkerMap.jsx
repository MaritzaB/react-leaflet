import React from "react";
import { Popup, Circle } from "react-leaflet";

// Para regresar el icono a su estado original, quitar icon={icon}

export const MarkerMap = ({key, position, text}) => {
    return (
      <Circle
        weight="10"
        color="black"
        key={key}
        center={position}
        radius={3}
      >
      <Popup>
        {text}
      </Popup>
    </Circle>
    )
}
