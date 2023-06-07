import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { MapaLeaflet } from './MapaLeaflet.jsx'
import { MapaTrayectorias } from './MapaTrayectorias.jsx'

const guadalupeIsland = [28.883621, -118.292683]
const defaultZoom = 9

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <MapaLeaflet center={guadalupeIsland} zoom={defaultZoom}/>
    {/*<MapaTrayectorias />*/}
  </React.StrictMode>,
)
