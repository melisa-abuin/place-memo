import styles from './addPlaceButton.module.css'
import { Button } from '@/components/atoms/button'

interface Props {
  onClick: () => void
}

export const AddPlaceButton = ({ onClick }: Props) => (
  <div className={styles.addPlaceButton}>
    <Button onClick={onClick}>Add place</Button>
  </div>
)
