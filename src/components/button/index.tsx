import type { PropsWithChildren } from 'react'
import styles from './button.module.css'

type Props = PropsWithChildren<{ onClick: () => void }>

export const Button = ({ children, onClick }: Props) => (
  <button className={`${styles.button} ${styles.home}`} onClick={onClick}>
    {children}
  </button>
)
