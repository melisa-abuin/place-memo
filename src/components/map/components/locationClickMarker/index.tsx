import { Marker, useMapEvents } from 'react-leaflet'
import { useState } from 'react'
import { LatLng, LeafletMouseEvent } from 'leaflet'
import { getMarkerIcon } from '../../utils/getMarkerIcon'
import { PlaceInfo } from '@/components/placeInfo'

interface Props {
  onMapClick: (position: LatLng) => void
}

export const LocationClickMarker = ({ onMapClick }: Props) => {
  const [position, setPosition] = useState<LatLng | null>(null)
  const markerIcon = getMarkerIcon()

  const handleMapClick = (event: LeafletMouseEvent) => {
    onMapClick(event.latlng)
    setPosition(event.latlng)
  }

  useMapEvents({
    click: handleMapClick,
  })

  if (position === null) {
    return null
  }

  return <Marker icon={markerIcon} position={position} />
}
