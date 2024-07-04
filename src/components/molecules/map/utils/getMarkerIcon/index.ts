import { Icon } from 'leaflet'

export const getMarkerIcon = (): Icon => {
  const icon = new Icon({
    iconUrl: '/marker-icon.png',
    iconRetinaUrl: '/marker-icon.png',
    popupAnchor: [-0, -0],
    iconSize: [30, 40],
  })

  return icon
}
