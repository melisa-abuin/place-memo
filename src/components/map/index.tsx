import { MapContainer, TileLayer } from 'react-leaflet'
import { LocationClickMarker } from './components/locationClickMarker'
import { SearchBox } from './components/searchBox'
import type { Location } from '@/interfaces/location'
import { LocationMarker } from './components/locationMarker'

export const Map = ({ locations }: { locations: Location[] }) => (
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

    <LocationClickMarker />

    {locations.map(({ id, xCoordinate, yCoordinate }) => (
      <LocationMarker
        key={id}
        xCoordinate={xCoordinate}
        yCoordinate={yCoordinate}
      />
    ))}
  </MapContainer>
)
