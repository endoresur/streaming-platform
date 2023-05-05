/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useRef } from 'react'

import PlayerButton from '../PlayerButton'

import useVolumeControl from './useVolumeControl'
import styles from './styles.module.scss'

interface Props {
  onChangeVolume: (volume: number) => void
}

const VolumeControl = ({ onChangeVolume }: Props) => {
  const rootRef = useRef<HTMLDivElement>(null)

  const {
    getVolumeLoudnessStyle,
    isOpenVolumeBar,
    onCloseVolumeBar,
    onKeyDown,
    onOpenVolumeBar,
    onToggleVolume,
    onWheelSetVolume,
    volume,
    isTabletMobile
  } = useVolumeControl(rootRef, onChangeVolume)

  return (
    <div className={styles.volumeControlRoot} ref={rootRef}>
      <div
        className={styles.volumeControlWrap}
        onMouseEnter={onOpenVolumeBar}
        onMouseLeave={onCloseVolumeBar}
        onFocus={onOpenVolumeBar}
        onBlur={onCloseVolumeBar}
        onWheel={onWheelSetVolume}
      >
        <PlayerButton
          iconSrc={getVolumeLoudnessStyle()?.src}
          color={getVolumeLoudnessStyle()?.color}
          className={styles.control}
          onClick={onToggleVolume}
        />
        {!isTabletMobile && (
          <div className={isOpenVolumeBar ? styles.volumeBarOpened : styles.volumeBarClosed}>
            <input
              tabIndex={0}
              type="range"
              min={0}
              max={1}
              step={0.01}
              value={volume}
              className={styles.volumeRange}
              onChange={e => onChangeVolume(Number(e.target.value))}
              onKeyDown={onKeyDown}
              style={{ backgroundSize: `${volume * 100}% 100%` }}
            ></input>
          </div>
        )}
      </div>
    </div>
  )
}

export default VolumeControl
