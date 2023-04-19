import { useMap } from 'react-leaflet'
import { GeoSearchControl, OpenStreetMapProvider } from 'leaflet-geosearch'
import { useEffect } from 'react'

export const SearchBox = () => {
  const provider = new OpenStreetMapProvider()

  const searchControl = GeoSearchControl({
    provider: provider,
  })

  const map = useMap()

  useEffect(() => {
    map.addControl(searchControl)

    return () => {
      map.removeControl(searchControl)
    }
  }, [])

  return null
}
