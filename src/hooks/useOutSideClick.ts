import { useEffect, RefObject } from 'react'

function useOnClickOutside(ref: RefObject<HTMLDivElement | undefined>, handler: (ev: MouseEvent | TouchEvent) => void) {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      if (!ref.current || (event.target instanceof HTMLElement && ref.current.contains(event.target))) {
        return
      }
      handler(event)
    }
    document.addEventListener('mousedown', listener)
    document.addEventListener('touchstart', listener)
    return () => {
      document.removeEventListener('mousedown', listener)
      document.removeEventListener('touchstart', listener)
    }
  }, [ref, handler])
}

export default useOnClickOutside
