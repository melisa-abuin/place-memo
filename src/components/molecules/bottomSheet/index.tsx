import { SectionHeader } from '../../../components/atoms/sectionHeader'
import styles from './bottomSheet.module.css'
import { Location } from '@/interfaces/location'
import { Button } from '../../../components/atoms/button'

interface Props extends Pick<Location, 'title' | 'content'> {
  onCloseButtonClick: () => void
  onPrimaryButtonClick: () => void
  onSecondaryButtonClick: () => void
}

export const BottomSheet = ({
  content,
  onCloseButtonClick,
  onPrimaryButtonClick,
  onSecondaryButtonClick,
  title,
}: Props) => {
  return (
    <div
      className={styles.externalContainer}
      role="dialog"
      onClick={onCloseButtonClick}
    >
      <div className={styles.bottomSheet}>
        <SectionHeader
          id="bottomSheet"
          image={{
            alt: 'Close bottom sheet',
            height: 15,
            onClick: onCloseButtonClick,
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
              onClick={onSecondaryButtonClick}
              variant="secondary"
            >
              Delete
            </Button>
            <Button
              borders="squared"
              onClick={onPrimaryButtonClick}
              variant="primary"
            >
              Edit
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
