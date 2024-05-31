import type { PropsWithChildren } from 'react'
import styles from './button.module.css'

type Props = PropsWithChildren<{
  borders?: 'rounded' | 'squared'
  onClick: (...args: any[]) => void
  variant?: 'primary' | 'secondary'
}>

export const Button = ({
  borders = 'rounded',
  children,
  onClick,
  variant = 'primary',
}: Props) => {
  return (
    <button
      className={`${styles.base} ${styles[variant]} ${styles[borders]}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
