import { useEffect, useState } from 'react'

// Como useState, pero el valor se guarda en el navegador y sobrevive a recargar la página.
export function useLocalStorage(key, initial) {
  const [value, setValue] = useState(() => {
    try {
      const saved = localStorage.getItem(key)
      return saved ? JSON.parse(saved) : initial
    } catch {
      return initial
    }
  })

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value))
    } catch {
      /* si el navegador bloquea el almacenamiento, seguimos sin guardar */
    }
  }, [key, value])

  return [value, setValue]
}
