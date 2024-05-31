import type { PropsWithChildren } from 'react'
import styles from './button.module.css'

type Props = PropsWithChildren<{
  onClick: (...args: any[]) => void
  borders?: 'rounded' | 'squared'
  variant?: 'primary' | 'secondary'
}>

export const Button = ({
  children,
  onClick,
  borders = 'rounded',
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
