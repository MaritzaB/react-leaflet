import { MapContainer, TileLayer, Marker, Popup, } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import './App.css';

const guadalupeIsland = [28.883621, -118.292683]

function App() {

  return (
    <MapContainer center={ guadalupeIsland } zoom={ 9 } >
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={ guadalupeIsland }>
      <Popup>
        Isla Guadalupe
      </Popup>
    </Marker>
  </MapContainer>
  )
}

export default App
