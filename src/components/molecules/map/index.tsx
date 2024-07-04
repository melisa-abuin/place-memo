import { MapContainer, TileLayer } from 'react-leaflet'
import { LocationClickMarker } from './components/locationClickMarker'
import { SearchBox } from './components/searchBox'
import type { Location } from '@/interfaces/location'
import { LocationMarker } from './components/locationMarker'
import { LatLng } from 'leaflet'
import { tileLayerUrl } from '@/constants'

interface Props {
  locations: Location[]
  onLocationClick: (location: Location) => void
  onMapClick: (coords: LatLng) => void
}

export const Map = ({ locations, onMapClick, onLocationClick }: Props) => (
  <MapContainer
    center={[51.505, -0.09]}
    minZoom={2}
    scrollWheelZoom={true}
    style={{ height: '100vh', width: '100vw' }}
    zoom={4}
  >
    <TileLayer
      url={tileLayerUrl}
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
    />
    <SearchBox />
    <LocationClickMarker onMapClick={onMapClick} />
    {locations.map((location) => (
      <LocationMarker
        key={location.id}
        location={location}
        onClick={onLocationClick}
      />
    ))}
  </MapContainer>
)
