import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { MapaLeaflet } from './MapaLeaflet.jsx'
import { MapaNegociosMetro } from './MapaNegociosMetro.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MapaNegociosMetro />
  </React.StrictMode>,
)
