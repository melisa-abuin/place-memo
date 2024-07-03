import { BottomSheet } from '../bottomSheet'

interface Props {
  onClose: () => void
}

export const PlaceInfo = ({ onClose }: Props) => {
  // TODO: create desambiguation between bottom sheet and drawer on mobile and desktop
  return <BottomSheet onClose={onClose} />
}
