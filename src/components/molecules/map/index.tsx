import { MapContainer, TileLayer } from 'react-leaflet'
import { LocationClickMarker } from './components/locationClickMarker'
import { SearchBox } from './components/searchBox'
import type { Location, LocationFields } from '@/interfaces/location'
import { LocationMarker } from './components/locationMarker'
import { AddPlaceButton } from './components/addPlaceButton'
import { Modal } from '../modal'
import { useState } from 'react'
import { LatLng } from 'leaflet'
import { useToast } from '@/hooks/useToast'
import { PlaceInfo } from '../placeInfo'
import { tileLayerUrl } from '@/constants'

export const Map = ({ locations }: { locations: Location[] }) => {
  const [modalState, setModalState] = useState(false)
  const [isAddButtonVisible, setIsAddButtonVisible] = useState(false)
  const [locationInfo, setLocationInfo] = useState<Location | null>(null)
  const [currentLocation, setCurrentLocation] = useState<LatLng | null>(null)

  const { showToast } = useToast()

  const openModal = () => {
    setIsAddButtonVisible(false)
    setModalState(true)
  }

  const onMapClick = (position: LatLng) => {
    setCurrentLocation(position)
    setIsAddButtonVisible(true)
  }

  const onLocationClick = (location: Location) => {
    setLocationInfo(location)
    setIsAddButtonVisible(false)
  }

  const closeLocationInfo = () => {
    setLocationInfo(null)
  }

  const onLocationEdit = () => {
    setModalState(true)
  }

  const submitData = async (fieldValues: LocationFields) => {
    try {
      const body = {
        title: fieldValues.name,
        content: fieldValues.description,
        xCoordinate: currentLocation?.lat,
        yCoordinate: currentLocation?.lng,
      }

      await fetch('/api/postLocation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })

      showToast('Place added successfully', 'success')
    } catch (error) {
      showToast('Something went wrong', 'error')
    }
  }

  return (
    <>
      <MapContainer
        center={[51.505, -0.09]}
        minZoom={2}
        scrollWheelZoom={true}
        style={{ height: '100vh', width: '100vw' }}
        zoom={4}
      >
        <TileLayer
          url={tileLayerUrl}
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        />
        <SearchBox />
        <LocationClickMarker onMapClick={onMapClick} />
        {locations.map((location) => (
          <LocationMarker
            key={location.id}
            location={location}
            onClick={onLocationClick}
          />
        ))}
      </MapContainer>
      {isAddButtonVisible && <AddPlaceButton onClick={openModal} />}
      <Modal
        modalState={modalState}
        setModalState={setModalState}
        onRightButtonClick={submitData}
      />
      {!!locationInfo && (
        <PlaceInfo
          content={locationInfo.content}
          onClose={closeLocationInfo}
          onEdit={onLocationEdit}
          title={locationInfo.title}
        />
      )}
    </>
  )
}
