import dynamic from 'next/dynamic'
import type { Location, LocationFields } from '@/interfaces/location'
import styles from './pageContainer.module.css'
import { Loader } from '@/components/atoms/loader'
import { AddPlaceButton } from '@/components/molecules/map/components/addPlaceButton'
import { useState } from 'react'
import { Modal } from '@/components/molecules/modal'
import { PlaceInfo } from '@/components/molecules/placeInfo'
import { useToast } from '@/hooks/useToast'
import { LatLng } from 'leaflet'

const MapComponent = dynamic(
  () => import('@/components/molecules/map').then((module) => module.Map),
  {
    ssr: false,
    loading: () => <Loader />,
  }
)

export const PageContainer = ({ locations }: { locations: Location[] }) => {
  const [modalState, setModalState] = useState(false)
  const [isAddButtonVisible, setIsAddButtonVisible] = useState(false)
  const [currentCoordinates, setCurrentCoordinates] = useState<LatLng | null>(
    null
  )
  const [currentLocation, setCurrentLocation] = useState<Location | null>(null)
  const [bottomSheetState, setBottomSheetState] = useState(false)

  const { showToast } = useToast()

  const openModal = () => {
    setIsAddButtonVisible(false)
    setModalState(true)
  }

  const onMapClick = (coords: LatLng) => {
    setCurrentCoordinates(coords)
    setCurrentLocation(null)
    setIsAddButtonVisible(true)
  }

  const onLocationClick = (location: Location) => {
    setBottomSheetState(true)
    setCurrentLocation(location)
    setIsAddButtonVisible(false)
  }

  const closeLocationInfo = () => setBottomSheetState(false)

  const editData = async (fieldValues: LocationFields) => {
    const { name, description } = fieldValues

    try {
      const body = {
        title: name,
        content: description,
      }

      await fetch(`/api/patchLocation/${currentLocation?.id}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })

      showToast('Place edited successfully', 'success')
    } catch (error) {
      showToast('Something went wrong', 'error')
    }
  }

  const submitData = async (fieldValues: LocationFields) => {
    const { lat, lng } = currentCoordinates ?? {}
    const { name, description } = fieldValues

    try {
      const body = {
        title: name,
        content: description,
        xCoordinate: lat,
        yCoordinate: lng,
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
    <div className={styles.container}>
      <MapComponent
        locations={locations}
        onLocationClick={onLocationClick}
        onMapClick={onMapClick}
      />

      {isAddButtonVisible && <AddPlaceButton onClick={openModal} />}

      <Modal
        key={currentLocation ? currentLocation.id : 0}
        locationData={currentLocation}
        modalState={modalState}
        onRightButtonClick={!!currentLocation ? editData : submitData}
        setModalState={setModalState}
      />

      {bottomSheetState && currentLocation && (
        <PlaceInfo
          content={currentLocation.content}
          onClose={closeLocationInfo}
          onEdit={openModal}
          title={currentLocation.title}
        />
      )}
    </div>
  )
}
