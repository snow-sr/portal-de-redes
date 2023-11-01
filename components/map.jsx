import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import { Icon } from 'leaflet'
import markerIconPng from "../public/marcador.png"
import 'leaflet/dist/leaflet.css'

const Map = () => {
  return (
    <MapContainer center={[-26.304853, -48.854705]} zoom={70} scrollWheelZoom={false} style={{height: 400, width: "100%"}}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[-26.304853, -48.854705]} icon={new Icon({iconUrl: "/marcador.png", iconSize: [25, 25], iconAnchor: [12, 41]})}>
        <Popup>
          Estamos aqui!
        </Popup>
      </Marker>
    </MapContainer>
  )
}

export default Map