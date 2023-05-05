import Hls from 'hls.js'
import { RefObject, useEffect, useRef, useState, KeyboardEvent } from 'react'

import { useRootStore } from 'hooks/useRootStore'
import { isAcceptableKey } from 'utils/keyboard'

import { useHLSContext } from '../../hooks/useHLSContext'
import { REWIND_TIME } from '../../constants'

import useFullscreenApi from './hooks/useFullscreen'
import { hlsConfig } from './constants'

const useHLS = (videoRef: RefObject<HTMLVideoElement>, playerRef: RefObject<HTMLDivElement>, src: string) => {
  const hlsRef = useRef<Hls | null>(null)
  const currentTimeoutRef = useRef<NodeJS.Timeout>()
  const bufferingTimeoutRef = useRef<NodeJS.Timeout>()

  const [isStarted, setIsStarted] = useState(false)
  const [isCanPlay, setIsCanPlay] = useState(false)
  const [isControlBarOpen, setIsControlBarOpen] = useState(false)
  const [updateControls, setUpdateControls] = useState(false)
  const [isInView, setIsInView] = useState(false)

  const { hardwareStore } = useRootStore()
  const {
    setIsPlaying,
    isPlaying,
    setIsBuffering,
    setProgress,
    setVolume,
    volume,
    setBufferedPercentage,
    setIsFullscreen,
    isBuffering
  } = useHLSContext()

  const fullscreenApi = useFullscreenApi()

  /**
   * Component methods
   */

  const onToggleFullscreen = () => {
    const player = playerRef.current

    if (!player) return

    if (fullscreenApi.fullscreenElement && document[fullscreenApi.fullscreenElement]) {
      fullscreenApi.exitFullscreen && document[fullscreenApi.exitFullscreen]()
      setIsFullscreen(false)
    } else if (fullscreenApi.isIosNoSpec) {
      videoRef.current?.webkitEnterFullscreen()
      setIsFullscreen(true)
    } else {
      setIsFullscreen(true)
      fullscreenApi.requestFullscreen && player[fullscreenApi.requestFullscreen]()
    }
  }

  const onStartPlayBack = () => {
    onTogglePlayback()
    setIsStarted(true)
    videoRef.current?.focus({ preventScroll: true })
  }

  const onKeyDownTogglePlay = (e: KeyboardEvent<HTMLDivElement | HTMLVideoElement>, start = false) => {
    if (isAcceptableKey(e, ['Space', 'Enter'])) {
      e.preventDefault()
      if (!start) {
        onTogglePlayback()
      } else {
        onStartPlayBack()
      }
    }
  }

  const onKeyDownPlayer = (e: KeyboardEvent<HTMLDivElement>) => {
    if (isInView) {
      setUpdateControls(prev => !prev)
    }

    if (e.target === e.currentTarget && isAcceptableKey(e, ['Space', 'Enter'])) {
      e.preventDefault()
      onTogglePlayback()
    }
  }

  /**
   * Video external methods
   */

  const onChangeVolume = (volume: number) => {
    const video = videoRef.current
    if (!video) return

    video.volume = volume
    setVolume(volume)

    if (volume === 0) {
      video.muted = true
    }
    if (volume > 0 && video.muted) {
      video.muted = false
    }
  }

  const onRewindVideo = (progress: number) => {
    const video = videoRef.current
    if (!video) return
    video.currentTime = video.duration * (progress / 100)
  }

  const onRewindVideoByStep = (step: 'back' | 'forward') => {
    const video = videoRef.current
    if (!video) return
    switch (step) {
      case 'back':
        video.currentTime -= REWIND_TIME
        setProgress(prev => ({ ...prev, percentage: (video.currentTime / video.duration) * 100 }))
        break
      case 'forward':
        video.currentTime += REWIND_TIME
        setProgress(prev => ({ ...prev, percentage: (video.currentTime / video.duration) * 100 }))
    }
  }

  const onTogglePlayback = () => {
    const video = videoRef.current
    if (!video) return
    if (video.paused) {
      video.play().catch(err => console.error(err))
    } else {
      video.pause()
    }
  }

  const onToggleControlBar = () => {
    setIsControlBarOpen(prev => !prev)
  }

  const onMouseOver = () => {
    if (isInView) {
      setUpdateControls(prev => !prev)
    }
  }

  /**
   * Video internal methods
   */

  const firstStartAutoplayedVideo = () => {
    if (!videoRef.current) return
    videoRef.current.muted = true
    setVolume(0)
    videoRef.current?.play().catch(err => console.error(err))
  }

  const getBufferedValues = (): { time: number; percentage: number } => {
    const video = videoRef.current
    if (!video) return { time: 0, percentage: 0 }
    const bRanges = video.buffered
    let bDuration = 0

    for (let i = 0; i < bRanges.length; i++) {
      bDuration = bRanges.end(i)
    }
    return {
      time: bDuration,
      percentage: (bDuration / video.duration) * 100
    }
  }

  /**
   * Video handlers
   */

  const onTimeUpdate = () => {
    const video = videoRef.current
    if (!video) return
    if (isBuffering) setIsBuffering(false)
    const currentTime = video.currentTime
    setProgress(prev => ({ duration: prev.duration, percentage: (currentTime / video.duration) * 100, currentTime }))
  }

  const onCanPlay = () => {
    setIsCanPlay(true)
  }

  const onWaiting = () => {
    setIsBuffering(true)
  }

  const onPlaying = () => {
    setIsPlaying(true)
    if (hardwareStore.isTabletMobile) {
      setIsControlBarOpen(false)
    }
  }

  const onPause = () => {
    setIsPlaying(false)
  }

  const onLoadedMetadata = () => {
    const video = videoRef.current
    if (!video) return
    setProgress(prev => ({ ...prev, duration: video.duration }))
  }

  const onIosExitFullscreen = () => {
    setIsFullscreen(false)
  }

  const onFullscreenChange = () => {
    if (fullscreenApi.fullscreenElement && !document[fullscreenApi.fullscreenElement]) {
      setIsFullscreen(false)
    }
  }

  const addVideoHandlers = () => {
    const video = videoRef.current
    if (!video) return
    video.addEventListener('canplay', onCanPlay)
    video.addEventListener('waiting', onWaiting)
    video.addEventListener('playing', onPlaying)
    video.addEventListener('pause', onPause)
    video.addEventListener('timeupdate', onTimeUpdate)
    video.addEventListener('loadedmetadata', onLoadedMetadata)
    video.addEventListener('webkitendfullscreen', onIosExitFullscreen)
  }

  /**
   * HLS usage
   */

  const addHlsHandlers = (hls: Hls) => {
    hls.on(Hls.Events.MEDIA_ATTACHED, () => {
      hls.loadSource(src)
    })

    hls.on(Hls.Events.FRAG_BUFFERED, () => {
      const video = videoRef.current
      if (!video) return
      const buffered = getBufferedValues()
      if (buffered.time > video.currentTime) setIsBuffering(false)
      setBufferedPercentage(buffered.percentage)
    })

    hls.on(Hls.Events.ERROR, (event, data) => {
      if (data.fatal) {
        switch (data.type) {
          case Hls.ErrorTypes.NETWORK_ERROR:
            hls.startLoad()
            break
          case Hls.ErrorTypes.MEDIA_ERROR:
            hls.recoverMediaError()
            break
          default:
            initHls()
            break
        }
      }
    })
  }

  const initHls = () => {
    if (hlsRef.current) {
      hlsRef.current.destroy()
    }
    const newHls = new Hls(hlsConfig)
    if (videoRef.current != null) {
      newHls.attachMedia(videoRef.current)
      videoRef.current.volume = volume
    }

    addHlsHandlers(newHls)
    addVideoHandlers()

    hlsRef.current = newHls
  }

  const initIosHls = () => {
    if (videoRef.current) {
      videoRef.current.src = src
      videoRef.current.volume = volume
    }
    addVideoHandlers()
  }

  useEffect(() => {
    if (Hls.isSupported()) {
      initHls()
    } else {
      initIosHls()
    }
    return () => {
      if (hlsRef.current) {
        hlsRef.current.destroy()
      }
    }
  }, [hlsConfig, videoRef, src])

  /**
   * Control bar visibility usage
   */

  useEffect(() => {
    if (!hardwareStore.isTabletMobile) {
      setIsControlBarOpen(true)

      currentTimeoutRef.current = setTimeout(() => {
        if (isInView && isPlaying) {
          videoRef.current?.focus({ preventScroll: true })
          setIsControlBarOpen(false)
        }
      }, 3000)

      return () => {
        currentTimeoutRef.current && clearTimeout(currentTimeoutRef.current)
      }
    }
  }, [updateControls, isPlaying])

  /**
   * Buffering flag
   */

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    if (!isPlaying) {
      bufferingTimeoutRef.current && clearTimeout(bufferingTimeoutRef.current)
    }

    const onTimeUpdateBuffering = () => {
      bufferingTimeoutRef.current && clearTimeout(bufferingTimeoutRef.current)
      bufferingTimeoutRef.current = setTimeout(() => {
        setIsBuffering(true)
      }, 1000)
    }

    video.addEventListener('timeupdate', onTimeUpdateBuffering)

    return () => {
      bufferingTimeoutRef.current && clearTimeout(bufferingTimeoutRef.current)
      video.removeEventListener('timeupdate', onTimeUpdateBuffering)
    }
  }, [isPlaying])

  /**
   * Set interval for ios
   */

  useEffect(() => {
    if (hardwareStore.isIOS) {
      const intervalIndex = setInterval(() => {
        const video = videoRef.current
        if (!video) return
        const buffered = getBufferedValues()
        setBufferedPercentage(buffered.percentage)
      }, 3000)

      return () => {
        if (intervalIndex) clearInterval(intervalIndex)
      }
    }
  }, [])

  /**
   * Exit fullscreen handler
   */

  useEffect(() => {
    if (fullscreenApi.fullscreenchange)
      playerRef.current?.addEventListener(fullscreenApi.fullscreenchange, onFullscreenChange)

    return () => {
      if (fullscreenApi.fullscreenchange)
        playerRef.current?.removeEventListener(fullscreenApi.fullscreenchange, onFullscreenChange)
    }
  }, [fullscreenApi])

  /**
   * Remove listeners from video
   */

  useEffect(() => {
    return () => {
      videoRef.current?.removeEventListener('canplay', onCanPlay)
      videoRef.current?.removeEventListener('waiting', onWaiting)
      videoRef.current?.removeEventListener('playing', onPlaying)
      videoRef.current?.removeEventListener('pause', onPause)
      videoRef.current?.removeEventListener('timeupdate', onTimeUpdate)
      videoRef.current?.removeEventListener('loadedmetadata', onLoadedMetadata)
      videoRef.current?.removeEventListener('webkitendfullscreen', onIosExitFullscreen)
    }
  }, [])

  return {
    onTogglePlayback,
    onChangeVolume,
    onRewindVideo,
    onRewindVideoByStep,
    onToggleFullscreen,
    onStartPlayBack,
    onKeyDownTogglePlay,
    onKeyDownPlayer,
    onMouseOver,
    onToggleControlBar,
    isStarted,
    isControlBarOpen,
    isTabletMobile: hardwareStore.isTabletMobile,
    isInView,
    isCanPlay
  }
}

export default useHLS
