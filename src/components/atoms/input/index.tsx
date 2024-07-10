import styles from './input.module.css'

interface Props {
  id: string
  isTextArea?: boolean
  name: string
  onChange: (e: { [key: string]: string }) => void
  placeholder?: string
  required?: boolean
  role?: string
  type?: string
  value?: string
}

export const Input = ({
  id,
  isTextArea = false,
  name,
  onChange,
  placeholder,
  required = false,
  role = 'textbox',
  type = 'text',
  value = '',
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
          role={role}
          placeholder={placeholder}
          value={value}
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
          role={role}
          placeholder={placeholder}
          value={value}
        />
      )}
    </div>
  )
}
