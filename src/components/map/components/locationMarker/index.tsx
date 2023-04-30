import { Marker, Popup, useMapEvents } from 'react-leaflet'
import { useState } from 'react'
import { LatLng, LeafletMouseEvent } from 'leaflet'
import { getMarkerIcon } from '../../utils/getMarkerIcon'

export const LocationMarker = () => {
  const [position, setPosition] = useState<LatLng | null>(null)
  const markerIcon = getMarkerIcon()

  const handleMapClick = (event: LeafletMouseEvent) => {
    setPosition(event.latlng)
  }

  useMapEvents({
    click: handleMapClick,
  })

  if (position === null) {
    return null
  }

  return (
    <Marker icon={markerIcon} position={position}>
      <Popup>You are here</Popup>
    </Marker>
  )
}
