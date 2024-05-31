import styles from './input.module.css'

type Props = {
  id: string
  isTextArea?: boolean
  name: string
  onChange: (e: { [key: string]: string }) => void
  required?: boolean
  type?: string
}

export const Input = ({
  id,
  isTextArea = false,
  name,
  onChange,
  required = false,
  type = 'text',
}: Props) => {
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => onChange({ [e.currentTarget.name]: e.currentTarget.value })

  return (
    <div className={styles.container}>
      <label htmlFor={id}>{name}</label>
      {isTextArea ? (
        <textarea
          className={styles.input}
          id={id}
          name={name}
          onChange={handleChange}
          required={required}
          rows={8}
          aria-label={name}
          role="textbox"
          placeholder="Trip to italy on march of 2021"
        />
      ) : (
        <input
          className={styles.input}
          id={id}
          name={name}
          onChange={handleChange}
          required={required}
          type={type}
          aria-label={name}
          role="textbox"
          placeholder="Best sunset I've ever seen"
        />
      )}
    </div>
  )
}
