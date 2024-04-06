import { useEffect, type RefObject, MutableRefObject } from 'react'

export const useOnClickOutside = (ref: MutableRefObject<any> | null, callback: Function) => {
    useEffect(() => {
        const listener = (event: MouseEvent) => {
          if (!ref || !ref.current || ref.current.contains(event.target as Node)) {
            return
          }
          callback()
        }
    
        document.addEventListener("mousedown", listener);
    
        return () => {
          document.removeEventListener("mousedown", listener);
        }
    },[ref, callback])
}