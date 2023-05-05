import { createContext, Dispatch, SetStateAction } from 'react'

import { Progress } from '../types'

interface HLSContextProps {
  isPlaying: boolean
  setIsPlaying: Dispatch<SetStateAction<boolean>>
  isBuffering: boolean
  setIsBuffering: Dispatch<SetStateAction<boolean>>
  isFullscreen: boolean
  setIsFullscreen: Dispatch<SetStateAction<boolean>>
  progress: Progress
  setProgress: Dispatch<SetStateAction<Progress>>
  bufferedPercentage: number
  setBufferedPercentage: Dispatch<SetStateAction<number>>
  volume: number
  setVolume: (volume: number) => void
  getPrevVolume: () => number
}

const HLSContext = createContext<HLSContextProps | undefined>(undefined)

export default HLSContext
