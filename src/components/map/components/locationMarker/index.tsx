import { Marker } from 'react-leaflet'
import { getMarkerIcon } from '../../utils/getMarkerIcon'
import { Location } from '@/interfaces/location'

interface Props {
  onClick: (location: Location) => void
  location: Location
}

export const LocationMarker = ({ onClick, location }: Props) => {
  const { xCoordinate, yCoordinate } = location
  const markerIcon = getMarkerIcon()

  return (
    <Marker
      icon={markerIcon}
      eventHandlers={{
        click: () => {
          onClick(location)
        },
      }}
      position={[xCoordinate, yCoordinate]}
    />
  )
}
