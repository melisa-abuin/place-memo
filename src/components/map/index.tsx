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
        url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
      />
      <SearchBox />
      <LocationMarker />
    </MapContainer>
  )
}
