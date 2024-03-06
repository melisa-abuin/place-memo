import { Button } from '../button'
import { Input } from '../input'
import styles from './modal.module.css'
import Image from 'next/image'

interface Props {
  modalState: boolean
  onCrossClick: () => void
  onLeftButtonClick: () => void
  onRightButtonClick: () => void
}

export const Modal = ({
  modalState,
  onCrossClick,
  onLeftButtonClick,
  onRightButtonClick,
}: Props) => {
  if (!modalState) {
    return null
  }

  return (
    <div aria-labelledby="modalTitle" className={styles.modal} role="dialog">
      <div className={styles.header}>
        <div>
          <h2 className={styles.title} id="modalTitle">
            Add Place
          </h2>
          <p className={styles.subtitle}>To save a new memory</p>
        </div>
        <Image
          alt="Close modal"
          height={15}
          onClick={onCrossClick}
          src="/close-icon.png"
          width={15}
        />
      </div>
      <div className={styles.content}>
        <form>
          <div className={styles.input}>
            <Input type="text" id="name" name="name" required />
          </div>
          <div className={styles.input}>
            <Input id="description" isTextArea name="description" />
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
        <Button borders="squared" onClick={onRightButtonClick}>
          Submit
        </Button>
      </div>
    </div>
  )
}
