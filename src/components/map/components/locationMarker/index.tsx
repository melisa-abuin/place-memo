import { Marker, Popup, useMapEvents } from 'react-leaflet'
import { useState } from 'react'
import { Icon, LatLng, LeafletMouseEvent } from 'leaflet'

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

  const icon = new Icon({
    iconUrl: '/marker-icon.png',
    iconRetinaUrl: '/marker-icon.png',
    popupAnchor: [-0, -0],
    iconSize: [30, 40],
  })

  return (
    <Marker icon={icon} position={position}>
      <Popup>You are here</Popup>
    </Marker>
  )
}
