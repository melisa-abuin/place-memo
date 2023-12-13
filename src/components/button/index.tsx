import type { PropsWithChildren } from 'react'
import styles from './button.module.css'

type Props = PropsWithChildren<{ onClick: () => void }>

export const Button = ({ children, onClick }: Props) => (
  <button className={`${styles.button}`} onClick={onClick}>
    {children}
  </button>
)
