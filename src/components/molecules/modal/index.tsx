import { useEffect, useState } from 'react'
import styles from './modal.module.css'
import { Location, LocationFields } from '@/interfaces/location'
import { SectionHeader } from '@/components/atoms/sectionHeader'
import { Input } from '@/components/atoms/input'
import { Button } from '@/components/atoms/button'

interface Props {
  locationData: Location | null
  modalState: boolean
  setModalState: (state: boolean) => void
  onLeftButtonClick?: () => void
  onRightButtonClick?: (args: LocationFields) => Promise<void>
}

const getDefaultFieldValues = (location: Location | null) => {
  return {
    name: location?.title ?? '',
    description: location?.content ?? '',
  }
}

export const Modal = ({
  locationData,
  modalState,
  setModalState,
  onLeftButtonClick,
  onRightButtonClick,
}: Props) => {
  const isEditing = !!locationData
  const defaultFieldValues = getDefaultFieldValues(locationData)
  const [fieldValues, setFieldValues] =
    useState<LocationFields>(defaultFieldValues)

  useEffect(() => setFieldValues(defaultFieldValues), [])

  console.log(fieldValues)
  const closeModal = () => setModalState(false)

  const handleLeftButtonClick = () => {
    closeModal()
    onLeftButtonClick && onLeftButtonClick()
  }

  const handleRightButtonClick = () => {
    closeModal()
    onRightButtonClick && onRightButtonClick(fieldValues)
  }

  if (!modalState) {
    return null
  }

  const onFieldChange = (value: Partial<LocationFields>) => {
    setFieldValues((prev) => ({ ...prev, ...value }))
  }

  return (
    <div aria-labelledby="modalTitle" className={styles.modal} role="dialog">
      <SectionHeader
        id="modalTitle"
        image={{
          alt: 'Close modal',
          height: 15,
          onClick: closeModal,
          width: 15,
        }}
        subtitle="To save a new memory"
        title={isEditing ? 'Edit Place' : 'Add Place'}
      />
      <div className={styles.content}>
        <form>
          <div className={styles.input}>
            <Input
              id="name"
              name="name"
              onChange={onFieldChange}
              placeholder="Best sunset I've ever seen"
              required
              value={fieldValues.name}
            />
          </div>
          <div className={styles.input}>
            <Input
              id="description"
              isTextArea
              name="description"
              onChange={onFieldChange}
              placeholder="Trip to italy on march of 2021"
              value={fieldValues.description}
            />
          </div>
        </form>
      </div>
      <div className={styles.buttonGroup}>
        <Button
          borders="squared"
          onClick={handleLeftButtonClick}
          variant="secondary"
        >
          Cancel
        </Button>
        <Button borders="squared" onClick={handleRightButtonClick}>
          Submit
        </Button>
      </div>
    </div>
  )
}
