import { Button } from '../button'
import { SectionHeader } from '../sectionHeader'
import styles from './bottomSheet.module.css'
import { Location } from '@/interfaces/location'

interface Props extends Pick<Location, 'title' | 'content'> {
  onClose: () => void
}

export const BottomSheet = ({ content, onClose, title }: Props) => {
  return (
    <div className={styles.externalContainer} role="dialog" onClick={onClose}>
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
            <Button borders="squared" onClick={() => {}} variant="secondary">
              Delete
            </Button>
            <Button borders="squared" onClick={() => {}}>
              Edit
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
