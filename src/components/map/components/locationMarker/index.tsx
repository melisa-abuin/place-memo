import { Marker, Popup } from 'react-leaflet'

import { getMarkerIcon } from '../../utils/getMarkerIcon'

interface Props {
  xCoordinate: number
  yCoordinate: number
}

export const LocationMarker = ({ xCoordinate, yCoordinate }: Props) => {
  const markerIcon = getMarkerIcon()

  return <Marker icon={markerIcon} position={[xCoordinate, yCoordinate]} />
}
