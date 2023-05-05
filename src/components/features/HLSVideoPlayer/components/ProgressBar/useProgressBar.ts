import { RefObject, useEffect, useRef, useState, KeyboardEvent } from 'react'

import { useRootStore } from 'hooks/useRootStore'
import { isAcceptableKey } from 'utils/keyboard'

import { useHLSContext } from '../../hooks/useHLSContext'

import { Rect } from './types'

const useProgressBar = (
  rootRef: RefObject<HTMLDivElement>,
  onRewindVideo: (progress: number) => void,
  onRewindVideoByStep: (step: 'back' | 'forward') => void,
  onSpaceDown: () => void
) => {
  const rootRectRef = useRef<Rect>({ startX: 0, progressWidth: 0 })
  const pressed = useRef(false)

  const [pointerPressedProgress, setPointerPressedProgress] = useState<number | null>(null)
  const [pointerProgress, setPointerProgress] = useState<number>(0)

  const { hardwareStore } = useRootStore()
  const { setProgress } = useHLSContext()

  const onPointerDown = () => {
    pressed.current = true
  }

  const onPointerMove = (e: PointerEvent | TouchEvent) => {
    const eventX = 'clientX' in e ? e.clientX : e.changedTouches[0].clientX
    const startX = rootRectRef.current.startX
    const progressWidth = rootRectRef.current.progressWidth
    const currentProgressWidth = eventX - startX
    const progress = (currentProgressWidth / progressWidth) * 100
    setPointerProgress(progress)

    if (pressed.current && progressWidth) {
      if (progress < 100 && progress >= 0) {
        setPointerPressedProgress(progress)
      }
    }
  }

  const onPointerUp = (e: PointerEvent | TouchEvent) => {
    const eventX = 'clientX' in e ? e.clientX : e.changedTouches[0].clientX

    const startX = rootRectRef.current.startX
    const progressWidth = rootRectRef.current.progressWidth

    if (pressed.current) {
      const currentProgressWidth = eventX - startX
      const progress = (currentProgressWidth / progressWidth) * 100
      onRewindVideo(progress)
      setProgress(prev => ({ ...prev, percentage: progress, currentTime: (progress * prev.duration) / 100 }))
      setPointerPressedProgress(null)
      pressed.current = false
    }
  }

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (isAcceptableKey(e, ['ArrowRight'])) {
      e.preventDefault()
      onRewindVideoByStep('forward')
    }
    if (isAcceptableKey(e, ['ArrowLeft'])) {
      e.preventDefault()
      onRewindVideoByStep('back')
    }
    if (isAcceptableKey(e, ['Space', 'Enter'])) {
      e.preventDefault()
      onSpaceDown()
    }
  }

  useEffect(() => {
    const onWindowResize = () => {
      if (rootRef.current) {
        rootRectRef.current = {
          startX: rootRef.current.getBoundingClientRect().x,
          progressWidth: rootRef.current.getBoundingClientRect().width
        }
      }
    }
    onWindowResize()
    window.addEventListener('resize', onWindowResize)

    if (hardwareStore.isTabletMobile) {
      document.addEventListener('touchend', onPointerUp)
      document.addEventListener('touchmove', onPointerMove)
    } else {
      document.addEventListener('pointerup', onPointerUp)
      document.addEventListener('pointermove', onPointerMove)
    }

    return () => {
      window.removeEventListener('resize', onWindowResize)
      document.removeEventListener('pointerup', onPointerUp)
      document.removeEventListener('pointermove', onPointerMove)
      document.removeEventListener('touchend', onPointerUp)
      document.removeEventListener('touchmove', onPointerMove)
    }
  }, [])

  return {
    pointerPressedProgress,
    onPointerDown,
    onKeyDown,
    pointerProgress,
    isTabletMobile: hardwareStore.isTabletMobile
  }
}

export default useProgressBar
