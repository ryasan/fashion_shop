import { useRef, useEffect } from 'react'

export const useDimensions = ref => {
  const dimensions = useRef({ height: 0 })

  useEffect(() => {
    dimensions.current.height = ref.current.offsetHeight
  }, [])

  return () => dimensions.current
}
