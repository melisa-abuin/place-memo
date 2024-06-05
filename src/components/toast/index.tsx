import styles from './toast.module.css'
import Image from 'next/image'

type Props = {
  message: string
  onClick: (...args: any[]) => void
  variant?: 'error' | 'success'
}

export const Toast = ({ message, onClick, variant = 'success' }: Props) => (
  <div className={`${styles.base} ${styles[variant]}`} onClick={onClick}>
    <p className={styles.message}>{message}</p>
    <Image alt="Dismiss toast" height={15} src="/cross-circle.png" width={15} />
  </div>
)
