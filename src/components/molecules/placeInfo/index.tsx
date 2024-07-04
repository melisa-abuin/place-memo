import { Location } from '@/interfaces/location'
import { BottomSheet } from '../bottomSheet'

interface Props extends Pick<Location, 'title' | 'content'> {
  onClose: () => void
  onEdit: () => void
}

export const PlaceInfo = ({ content, onClose, onEdit, title }: Props) => {
  // TODO: create desambiguation between bottom sheet and drawer on mobile and desktop
  return (
    <BottomSheet
      content={content}
      closeBottomSheet={onClose}
      onRightButtonClick={onEdit}
      title={title}
    />
  )
}
