import { Marker } from 'react-leaflet'
import { getMarkerIcon } from '../../utils/getMarkerIcon'
import { useState } from 'react'
import { PlaceInfo } from '@/components/placeInfo'

interface Props {
  xCoordinate: number
  yCoordinate: number
}

export const LocationMarker = ({ xCoordinate, yCoordinate }: Props) => {
  const markerIcon = getMarkerIcon()
  const [placeInfoVisible, setPlaceInfoVisible] = useState(false)

  const closePlaceInfo = () => {
    setPlaceInfoVisible(false)
  }

  return (
    <>
      <Marker
        icon={markerIcon}
        eventHandlers={{
          click: () => {
            setPlaceInfoVisible((prevState) => !prevState)
          },
        }}
        position={[xCoordinate, yCoordinate]}
      />
      {placeInfoVisible && <PlaceInfo onClose={closePlaceInfo} />}
    </>
  )
}
