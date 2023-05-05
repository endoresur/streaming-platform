/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useRef } from 'react'
import { ReactSVG } from 'react-svg'
import { observer } from 'mobx-react-lite'

// import { combineClasses as cc } from 'utils/common'

import ControlBar from '../ControlBar'
import { useHLSContext } from '../../hooks/useHLSContext'
import { playerIcons } from '../../constants'
import PlayerButton from '../PlayerButton'
import { VideoPlayerProps } from '../../types'
import ExternalButtonLink from '../ExternalButtonLink'

import useHLS from './useHLS'
// import * as styles from './styles.css'
import styles from './styles.module.scss'

const VideoPlayer = ({ videoLink, className, externalLink }: VideoPlayerProps) => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const playerRef = useRef<HTMLDivElement>(null)

  const { isBuffering, isPlaying, isFullscreen } = useHLSContext()
  const {
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
    isTabletMobile,
    isCanPlay
  } = useHLS(videoRef, playerRef, videoLink)

  return (
    <>
      <section className={`${styles.videoPlayerRoot} ${className}`}>
        <div className={styles.videoFullWidth}>
          <div className={styles.backVideoLayout}></div>
          <div
            ref={playerRef}
            className={`${styles.videoContainer} ${isFullscreen && styles.fullscreen}`}
            onMouseMove={!isTabletMobile ? onMouseOver : undefined}
            onKeyDown={onKeyDownPlayer}
          >
            <video
              ref={videoRef}
              tabIndex={0}
              onClick={!isTabletMobile ? onTogglePlayback : onToggleControlBar}
              onKeyDown={onKeyDownTogglePlay}
              className={styles.video}
              controls={false}
              playsInline
              style={{ backgroundColor: !isCanPlay ? 'black' : undefined }}
            >
              <track kind="captions" src="" />
            </video>
            {externalLink && (
              <ExternalButtonLink
                href={externalLink.link}
                className={
                  isControlBarOpen || (!isPlaying && !isTabletMobile)
                    ? styles.externalButtonOpen
                    : styles.externalButtonClose
                }
              >
                {externalLink.title}
              </ExternalButtonLink>
            )}
            <ControlBar
              className={
                isControlBarOpen || (!isPlaying && !isTabletMobile) ? styles.controlBarOpen : styles.controlBarClose
              }
              onTogglePlayback={onTogglePlayback}
              onChangeVolume={onChangeVolume}
              onRewindVideo={onRewindVideo}
              onRewindVideoByStep={onRewindVideoByStep}
              onToggleFullscreen={onToggleFullscreen}
            />
            <ReactSVG
              src={playerIcons.loading.src}
              className={isBuffering && isStarted ? styles.spinnerShow : styles.spinnerHide}
            />
            {videoRef.current?.ended && (
              <PlayerButton
                iconSrc={playerIcons.restart.src}
                color={playerIcons.restart.color}
                className={styles.replayButton}
                onClick={onTogglePlayback}
              />
            )}
          </div>
        </div>
      </section>
    </>
  )
}

export default observer(VideoPlayer)
