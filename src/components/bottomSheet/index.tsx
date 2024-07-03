import { Button } from '../button'
import { SectionHeader } from '../sectionHeader'
import styles from './bottomSheet.module.css'

export const BottomSheet = () => {
  return (
    <div className={styles.bottomSheet}>
      <SectionHeader
        id="bottomSheet"
        image={{
          alt: 'Close bottom sheet',
          height: 15,
          onClick: () => console.log('close'),
          width: 15,
        }}
        subtitle="More info"
        title="Info"
      />
      <div className={styles.content}>
        content
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
  )
}
