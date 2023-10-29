import { useMap } from 'react-leaflet'
import { GeoSearchControl, OpenStreetMapProvider } from 'leaflet-geosearch'
import { useEffect } from 'react'
import { getMarkerIcon } from '../../utils/getMarkerIcon'

export const SearchBox = () => {
  const provider = new OpenStreetMapProvider()

  const markerIcon = getMarkerIcon()

  const searchControl = GeoSearchControl({
    marker: {
      icon: markerIcon,
      draggable: false,
    },
    provider: provider,
  })

  const map = useMap()

  useEffect(() => {
    map.addControl(searchControl)

    return () => {
      map.removeControl(searchControl)
    }
  }, [map])

  return null
}
