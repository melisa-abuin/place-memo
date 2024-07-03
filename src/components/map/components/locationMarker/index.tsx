import { Marker } from 'react-leaflet'
import { getMarkerIcon } from '../../utils/getMarkerIcon'
import { useState } from 'react'
import { PlaceInfo } from '@/components/placeInfo'
import { Location } from '@/interfaces/location'

interface Props {
  hideAddButton: () => void
}

export const LocationMarker = ({
  hideAddButton,
  id,
  title,
  content,
  xCoordinate,
  yCoordinate,
}: Location & Props) => {
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
            // TODO: handle this in another way
            hideAddButton()
          },
        }}
        position={[xCoordinate, yCoordinate]}
      />
      {placeInfoVisible && (
        <PlaceInfo content={content} onClose={closePlaceInfo} title={title} />
      )}
    </>
  )
}
