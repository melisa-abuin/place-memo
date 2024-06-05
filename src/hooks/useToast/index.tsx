import { Toast as StyledToast } from '../../components/toast'
import { Toast } from '@/interfaces/toast'
import React, { createContext, useCallback, useContext, useState } from 'react'

type ShowToast = {
  showToast: (
    message: string,
    type: 'success' | 'error',
    duration?: number
  ) => void
}

const ToastContext = createContext<ShowToast | undefined>(undefined)

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([])

  const showToast = useCallback(
    (message: string, type: 'success' | 'error', duration: number = 3000) => {
      const id = Date.now()
      setToasts((prevToasts) => [...prevToasts, { id, message, type }])

      setTimeout(() => {
        setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id))
      }, duration)
    },
    []
  )

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <div className="toast-container">
        {toasts.map((toast) => (
          <StyledToast
            key={toast.id}
            message={toast.message}
            onClick={() =>
              setToasts((prevToasts) =>
                prevToasts.filter((prevToast) => prevToast.id !== toast.id)
              )
            }
            variant={toast.type}
          />
        ))}
      </div>
    </ToastContext.Provider>
  )
}

export function useToast() {
  const context = useContext(ToastContext)
  if (context === undefined) {
    throw new Error('useToast must be used within a ToastContext')
  }
  return context
}
