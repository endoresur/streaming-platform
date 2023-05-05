import { useState, useMemo, ReactNode, useCallback } from 'react'

import { DEFAULT_VOLUME, LOCAL_STORAGE_PREV_VOLUME_KEY, LOCAL_STORAGE_VOLUME_KEY } from '../constants'
import { Progress } from '../types'

import HLSContext from './HLSContext'

interface Props {
  children: ReactNode
}

export const HLSProvider = ({ children }: Props) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isBuffering, setIsBuffering] = useState(true)
  const [isFullscreen, setIsFullscreen] = useState(false)

  const [progress, setProgress] = useState<Progress>({ percentage: 0, currentTime: 0, duration: 0 })
  const [bufferedPercentage, setBufferedPercentage] = useState(0)
  const [volume, setVolume] = useState(getDefaultVolume())

  function getDefaultVolume() {
    const volume = localStorage.getItem(LOCAL_STORAGE_VOLUME_KEY) ?? DEFAULT_VOLUME
    localStorage.setItem(LOCAL_STORAGE_VOLUME_KEY, volume.toString())
    return Number(volume)
  }

  const changeVolume = useCallback(
    (value: number) => {
      localStorage.setItem(LOCAL_STORAGE_PREV_VOLUME_KEY, volume.toString())
      setVolume(value)
      localStorage.setItem(LOCAL_STORAGE_VOLUME_KEY, value.toString())
    },
    [volume]
  )

  const getPrevVolume = () => {
    return Number(localStorage.getItem(LOCAL_STORAGE_PREV_VOLUME_KEY))
  }

  const defaultProps = useMemo(
    () => ({
      isPlaying,
      setIsPlaying,
      isBuffering,
      setIsBuffering,
      isFullscreen,
      setIsFullscreen,
      progress,
      setProgress,
      bufferedPercentage,
      setBufferedPercentage,
      volume,
      setVolume: changeVolume,
      getPrevVolume
    }),
    [isPlaying, isBuffering, progress, bufferedPercentage, volume, isFullscreen]
  )

  return <HLSContext.Provider value={defaultProps}>{children}</HLSContext.Provider>
}
