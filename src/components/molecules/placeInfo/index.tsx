import { Location } from '@/interfaces/location'
import { BottomSheet } from '../bottomSheet'

interface Props extends Pick<Location, 'title' | 'content'> {
  onClose: () => void
  onDelete: () => void
  onEdit: () => void
}

export const PlaceInfo = ({
  content,
  onClose,
  onDelete,
  onEdit,
  title,
}: Props) => {
  // TODO: create desambiguation between bottom sheet and drawer on mobile and desktop
  return (
    <BottomSheet
      content={content}
      onCloseButtonClick={onClose}
      onSecondaryButtonClick={onDelete}
      onPrimaryButtonClick={onEdit}
      title={title}
    />
  )
}
