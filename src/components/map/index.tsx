import { MapContainer, Marker, TileLayer, useMap } from 'react-leaflet'
import { LocationMarker } from './components/locationMarker'
import { SearchBox } from './components/searchBox'

export const Map = () => {
  return (
    <MapContainer
      center={[51.505, -0.09]}
      minZoom={2}
      scrollWheelZoom={true}
      style={{ height: '100vh', width: '100vw' }}
      zoom={4}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[49.8397, 24.0297]} />
      <SearchBox />
      <LocationMarker />
    </MapContainer>
  )
}
