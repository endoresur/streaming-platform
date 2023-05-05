import { KeyboardEvent } from 'react'

import useWindowSize from 'hooks/useWindowSize'
import { isAcceptableKey } from 'utils/keyboard'

import { useHLSContext } from '../../hooks/useHLSContext'
import PlayerButton from '../PlayerButton'
import ProgressBar from '../ProgressBar'
import { playerIcons } from '../../constants'
import VolumeControl from '../VolumeControl'
import { getFormattedTime } from '../../utils/getFormattedTime'

import styles from './styles.module.scss'

interface Props {
  onTogglePlayback: () => void
  onChangeVolume: (volume: number) => void
  onRewindVideo: (progress: number) => void
  onRewindVideoByStep: (step: 'back' | 'forward') => void
  onToggleFullscreen: () => void
  className?: string
}

const ControlBar = ({
  onChangeVolume,
  onTogglePlayback,
  onRewindVideo,
  onRewindVideoByStep,
  onToggleFullscreen,
  className
}: Props) => {
  const { isPlaying, isFullscreen, progress } = useHLSContext()
  const { isMobile } = useWindowSize()

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (isAcceptableKey(e, ['Space']) && e.target === e.currentTarget) {
      e.preventDefault()
      onTogglePlayback()
    }
  }

  return (
    // NOTE: need to disabled rules for current cursor
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions, jsx-a11y/no-noninteractive-tabindex
    <div className={`${styles.controlBarRoot} ${className}`} tabIndex={0} onKeyDown={onKeyDown}>
      <ProgressBar
        onRewindVideo={onRewindVideo}
        onRewindVideoByStep={onRewindVideoByStep}
        onSpaceDown={onTogglePlayback}
      />
      <div className={styles.controlsWrap}>
        <div className={styles.leftControls}>
          <VolumeControl onChangeVolume={onChangeVolume} />
          <p className={styles.time}>{`${getFormattedTime(progress.currentTime)} / ${getFormattedTime(
            progress.duration
          )}`}</p>
        </div>
        <div className={styles.centerControls}>
          {!isMobile && (
            <PlayerButton
              color={playerIcons.back.color}
              iconSrc={playerIcons.back.src}
              className={styles.controlBase}
              onClick={() => onRewindVideoByStep('back')}
            />
          )}
          <PlayerButton
            color={!isPlaying ? playerIcons.play.color : playerIcons.pause.color}
            iconSrc={!isPlaying ? playerIcons.play.src : playerIcons.pause.src}
            className={styles.controlBase}
            onClick={onTogglePlayback}
          />
          {!isMobile && (
            <PlayerButton
              color={playerIcons.forward.color}
              iconSrc={playerIcons.forward.src}
              className={styles.controlBase}
              onClick={() => onRewindVideoByStep('forward')}
            />
          )}
        </div>
        <div className={styles.rightControls}>
          <PlayerButton
            color={!isFullscreen ? playerIcons.fullscreen.color : playerIcons.collapse.color}
            iconSrc={!isFullscreen ? playerIcons.fullscreen.src : playerIcons.collapse.src}
            className={styles.controlBase}
            onClick={onToggleFullscreen}
          />
        </div>
      </div>
      <div className={styles.shadow}></div>
    </div>
  )
}

export default ControlBar
