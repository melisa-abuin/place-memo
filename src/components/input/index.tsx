import styles from './input.module.css'

type Props = {
  id: string
  isTextArea?: boolean
  name: string
  required?: boolean
  type?: string
}

export const Input = ({
  id,
  isTextArea = false,
  name,
  required = false,
  type,
}: Props) => {
  return (
    <div className={styles.container}>
      <label htmlFor={name}>{name}</label>
      {isTextArea ? (
        <textarea
          className={styles.input}
          id={id}
          name={name}
          required={required}
          rows={8}
        />
      ) : (
        <input
          className={styles.input}
          id={id}
          name={name}
          required={required}
          type={type}
        />
      )}
    </div>
  )
}
