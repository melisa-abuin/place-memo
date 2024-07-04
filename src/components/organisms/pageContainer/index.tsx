import dynamic from 'next/dynamic'
import type { Location } from '@/interfaces/location'
import styles from './pageContainer.module.css'
import Image from 'next/image'
import { Loader } from '@/components/atoms/loader'

const MapComponent = dynamic(
  () => import('@/components/molecules/map').then((module) => module.Map),
  {
    ssr: false,
    loading: () => <Loader />,
  }
)

export const PageContainer = ({ locations }: { locations: Location[] }) => {
  return (
    <div className={styles.container}>
      <MapComponent locations={locations} />
    </div>
  )
}
