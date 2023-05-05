import { useEffect, useState, RefObject, WheelEvent, KeyboardEvent } from 'react'

import { useRootStore } from 'hooks/useRootStore'
import { isAcceptableKey } from 'utils/keyboard'

import { DEFAULT_VOLUME, playerIcons } from '../../constants'
import { useHLSContext } from '../../hooks/useHLSContext'


const useVolumeControl = (rootRef: RefObject<HTMLDivElement>, onChangeVolume: (volume: number) => void) => {
  const [isOpenVolumeBar, setIsOpenVolumeBar] = useState(false)

  const { hardwareStore } = useRootStore()
  const { volume, getPrevVolume } = useHLSContext()

  const onToggleVolume = () => {
    if (volume > 0) {
      onChangeVolume(0)
    } else {
      onChangeVolume(getPrevVolume() || DEFAULT_VOLUME)
    }
  }

  const onOpenVolumeBar = () => {
    setIsOpenVolumeBar(true)
  }

  const onCloseVolumeBar = () => {
    setIsOpenVolumeBar(false)
  }

  const onWheelSetVolume = (e: WheelEvent<HTMLDivElement>) => {
    e.stopPropagation()
    let delta = -e.deltaX / 1000 + e.deltaY / 1000 + volume
    delta = delta > 1 ? 1 : delta < 0 ? 0 : delta
    onChangeVolume(delta)
  }

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (isAcceptableKey(e, ['ArrowRight'])) {
      e.preventDefault()
      const newVolume = Number((volume + 0.1).toFixed(2))
      if (newVolume < 1) {
        onChangeVolume(newVolume)
      }
      if (newVolume >= 1 && volume !== 1) {
        onChangeVolume(1)
      }
    }
    if (isAcceptableKey(e, ['ArrowLeft'])) {
      e.preventDefault()
      const newVolume = Number((volume - 0.1).toFixed(2))
      if (newVolume > 0) {
        onChangeVolume(newVolume)
      }
      if (newVolume <= 0 && volume) {
        onChangeVolume(0)
      }
    }
    if (isAcceptableKey(e, ['Space'])) {
      e.preventDefault()
    }
  }

  const getVolumeLoudnessStyle = () => {
    if (volume === 0) {
      return playerIcons.silence
    }
    if (volume > 0 && hardwareStore.isTabletMobile) {
      return playerIcons.soundLoud
    }
    if (volume <= 0.3) {
      return playerIcons.soundQuiet
    }
    if (volume <= 0.6) {
      return playerIcons.soundMedium
    }
    if (volume > 0.6) {
      return playerIcons.soundLoud
    }
    return playerIcons.soundQuiet
  }

  useEffect(() => {
    if (isOpenVolumeBar) {
      rootRef.current?.addEventListener('wheel', (e) => {
        e.preventDefault()
      })
      return () => {
        rootRef.current?.removeEventListener('wheel', (e) => {
          e.preventDefault()
        })
      }
    }
  }, [isOpenVolumeBar])

  return {
    onWheelSetVolume,
    onKeyDown,
    onToggleVolume,
    onOpenVolumeBar,
    onCloseVolumeBar,
    volume,
    isOpenVolumeBar,
    getVolumeLoudnessStyle,
    isTabletMobile: hardwareStore.isTabletMobile
  }
}

export default useVolumeControl
