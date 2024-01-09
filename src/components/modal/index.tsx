import { Button } from '../button'
import styles from './modal.module.css'
import Image from 'next/image'

export const Modal = () => (
  <div aria-labelledby="modalTitle" className={styles.modal} role="dialog">
    <div className={styles.header}>
      <div>
        <h2 className={styles.title} id="modalTitle">
          Add Place
        </h2>
        <p className={styles.subtitle}>To save a new memory</p>
      </div>
      <Image alt="Close modal" height={15} src="/close-icon.png" width={15} />
    </div>
    <div className={styles.content}>
      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <input type="text" id="description" name="description" />
        </div>
      </form>
    </div>
    <div className={styles.buttonGroup}>
      <Button borders="squared" onClick={() => {}} variant="secondary">
        Cancel
      </Button>
      <Button borders="squared" onClick={() => {}}>
        Submit
      </Button>
    </div>
  </div>
)
