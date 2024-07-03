import { Location } from '@/interfaces/location'
import { BottomSheet } from '../bottomSheet'

interface Props extends Pick<Location, 'title' | 'content'> {
  onClose: () => void
}

export const PlaceInfo = ({ content, onClose, title }: Props) => {
  // TODO: create desambiguation between bottom sheet and drawer on mobile and desktop
  return <BottomSheet content={content} onClose={onClose} title={title} />
}
