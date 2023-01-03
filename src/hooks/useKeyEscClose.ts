import { useEffect } from 'react'

const useKeyEscClose = (onClickClose: () => void) => {
  useEffect(() => {
    function handleEscapeKey(event: KeyboardEvent) {
      if (event.code === 'Escape') {
        onClickClose()
      }
    }

    document.addEventListener('keydown', handleEscapeKey)
    return () => document.removeEventListener('keydown', handleEscapeKey)
  })
}

export default useKeyEscClose
