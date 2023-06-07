import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { MapaLeaflet } from './MapaLeaflet.jsx'
import { MapaTrayectorias } from './MapaTrayectorias.jsx'

const guadalupeIsland = [28.883621, -118.292683]
const defaultZoom = 9
const ejemplo = [[28.117638,-115.157151], [31.736051,-116.294682], [30.985556,-119.044815]]

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <MapaLeaflet center={guadalupeIsland} zoom={defaultZoom} puntos={ejemplo}/>
    {/*<MapaTrayectorias />*/}
  </React.StrictMode>,
)
