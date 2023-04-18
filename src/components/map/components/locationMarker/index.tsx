import { Marker, Popup, useMapEvents } from 'react-leaflet'
import { useState } from 'react'
import { LatLng, LeafletMouseEvent } from 'leaflet'

export const LocationMarker = () => {
  const [position, setPosition] = useState<LatLng | null>(null)

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
    <Marker position={position}>
      <Popup>You are here</Popup>
    </Marker>
  )
}
