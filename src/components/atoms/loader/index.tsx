import styles from './loader.module.css'
import Image from 'next/image'

export const Loader = () => (
  <div className={styles.container}>
    <Image alt="loading" height={250} src="/world-loader.gif" width={250} />
    <p>Loading...</p>
  </div>
)
