import { Button } from '../button'
import { SectionHeader } from '../sectionHeader'
import styles from './bottomSheet.module.css'

interface Props {
  title: string
  content: string
  onClose: () => void
}

export const BottomSheet = ({ content, onClose, title }: Props) => {
  return (
    <div className={styles.externalContainer} onClick={onClose}>
      <div className={styles.bottomSheet}>
        <SectionHeader
          id="bottomSheet"
          image={{
            alt: 'Close bottom sheet',
            height: 15,
            onClick: onClose,
            width: 15,
          }}
          subtitle="TBD"
          title={title}
        />
        <div className={styles.content}>
          {content}
          <div role="group" aria-label="actions" className={styles.buttonGroup}>
            <Button
              borders="squared"
              onClick={() => console.log('delete')}
              variant="secondary"
            >
              Delete
            </Button>
            <Button borders="squared" onClick={() => console.log('edit')}>
              Edit
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
