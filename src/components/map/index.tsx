import { MapContainer, TileLayer } from 'react-leaflet'
import { LocationClickMarker } from './components/locationClickMarker'
import { SearchBox } from './components/searchBox'
import type { Location, LocationFields } from '@/interfaces/location'
import { LocationMarker } from './components/locationMarker'
import { AddPlaceButton } from './components/addPlaceButton'
import { Modal } from '../modal'
import { useState } from 'react'
import { LatLng } from 'leaflet'

export const Map = ({ locations }: { locations: Location[] }) => {
  const [modalState, setModalState] = useState(false)
  const [isAddButtonVisible, setIsAddButtonVisible] = useState(false)
  const [currentLocation, setCurrentLocation] = useState<LatLng | null>(null)

  const openModal = () => {
    setModalState(true)
  }

  const closeModal = () => {
    setModalState(false)
  }

  const onMapClick = (position: LatLng) => {
    setCurrentLocation(position)
    setIsAddButtonVisible(true)
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
      setModalState(false)
    } catch (error) {
      // TODO: show error tooltip
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
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        />

        <SearchBox />

        <LocationClickMarker onMapClick={onMapClick} />

        {locations.map(({ id, xCoordinate, yCoordinate }) => (
          <LocationMarker
            key={id}
            xCoordinate={xCoordinate}
            yCoordinate={yCoordinate}
          />
        ))}
      </MapContainer>
      {isAddButtonVisible && <AddPlaceButton onClick={openModal} />}
      <Modal
        modalState={modalState}
        onCrossClick={closeModal}
        onLeftButtonClick={closeModal}
        onRightButtonClick={submitData}
      />
    </>
  )
}
