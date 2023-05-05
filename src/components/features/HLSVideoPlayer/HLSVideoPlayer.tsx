import React from 'react'

import { HLSProvider } from './context/HLSProvider'
import VideoPlayer from './components/VideoPlayer'
import { VideoPlayerProps } from './types'

const HLSVideoPlayer = ({ videoLink, className, externalLink }: VideoPlayerProps) => {
  return (
    <HLSProvider>
      <VideoPlayer videoLink={videoLink} className={className} externalLink={externalLink} />
    </HLSProvider>
  )
}

export default HLSVideoPlayer
