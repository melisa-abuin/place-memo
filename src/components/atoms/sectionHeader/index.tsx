import Image from 'next/image'
import styles from './sectionHeader.module.css'

interface Props {
  id?: string
  image: {
    alt: string
    height: number
    onClick: () => void
    width: number
  }
  subtitle: string
  title: string
}

export const SectionHeader = ({ id, image, subtitle, title }: Props) => {
  return (
    <div className={styles.container}>
      <div>
        <h2 className={styles.title} id={id}>
          {title}
        </h2>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>
      <Image src="/close-icon.png" {...image} />
    </div>
  )
}
