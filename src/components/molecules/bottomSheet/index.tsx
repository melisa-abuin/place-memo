import { SectionHeader } from '../../../components/atoms/sectionHeader'
import styles from './bottomSheet.module.css'
import { Location } from '@/interfaces/location'
import { Button } from '../../../components/atoms/button'

interface Props extends Pick<Location, 'title' | 'content'> {
  closeBottomSheet: () => void
  onLeftButtonClick: () => void
  onRightButtonClick: () => void
}

export const BottomSheet = ({
  content,
  closeBottomSheet,
  onRightButtonClick,
  onLeftButtonClick,
  title,
}: Props) => {
  return (
    <div
      className={styles.externalContainer}
      role="dialog"
      onClick={closeBottomSheet}
    >
      <div className={styles.bottomSheet}>
        <SectionHeader
          id="bottomSheet"
          image={{
            alt: 'Close bottom sheet',
            height: 15,
            onClick: closeBottomSheet,
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
              onClick={onLeftButtonClick}
              variant="secondary"
            >
              Delete
            </Button>
            <Button borders="squared" onClick={onRightButtonClick}>
              Edit
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
