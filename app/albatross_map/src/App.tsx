import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import './App.css'
import 'leaflet/dist/leaflet.css';

//const GuadalupeIsland = [28.883621, -118.292683];
//const defaultZoom = 9

function App() {

  return (
    
    <MapContainer center={ [28.883621, -118.292683] } zoom={ 9 } >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={ [28.883621, -118.292683] }>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
    
  )
};

export default App;

// checar: https://codesandbox.io/s/geojson-sqtkl?file=/src/index.tsx
