import { useState } from 'react'
import { Button } from '../button'
import { Input } from '../input'
import styles from './modal.module.css'
import { LocationFields } from '@/interfaces/location'
import { SectionHeader } from '../sectionHeader'

interface Props {
  modalState: boolean
  onCrossClick: () => void
  onLeftButtonClick: () => void
  onRightButtonClick: (args: LocationFields) => Promise<void>
}

const defaultFieldsValues = {
  name: '',
  desciption: '',
}

export const Modal = ({
  modalState,
  onCrossClick,
  onLeftButtonClick,
  onRightButtonClick,
}: Props) => {
  const [fieldValues, setFieldValues] = useState<LocationFields>({
    ...defaultFieldsValues,
  })

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
          onClick: onCrossClick,
          width: 15,
        }}
        subtitle="To save a new memory"
        title="Add Place"
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
            />
          </div>
          <div className={styles.input}>
            <Input
              id="description"
              isTextArea
              name="description"
              onChange={onFieldChange}
              placeholder="Trip to italy on march of 2021"
            />
          </div>
        </form>
      </div>
      <div className={styles.buttonGroup}>
        <Button
          borders="squared"
          onClick={onLeftButtonClick}
          variant="secondary"
        >
          Cancel
        </Button>
        <Button
          borders="squared"
          onClick={() => onRightButtonClick(fieldValues)}
        >
          Submit
        </Button>
      </div>
    </div>
  )
}
