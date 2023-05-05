import { useRef } from 'react'

import { useHLSContext } from '../../hooks/useHLSContext'
import { getFormattedTime } from '../../utils/getFormattedTime'

import styles from './styles.module.scss'
import useProgressBar from './useProgressBar'

interface Props {
  onRewindVideo: (progress: number) => void
  onRewindVideoByStep: (step: 'back' | 'forward') => void
  onSpaceDown: () => void
  className?: string
}

const ProgressBar = ({ onRewindVideo, onRewindVideoByStep, onSpaceDown, className }: Props) => {
  const rootRef = useRef<HTMLDivElement>(null)

  const { progress, bufferedPercentage } = useHLSContext()
  const { pointerPressedProgress, onPointerDown, onKeyDown, pointerProgress, isTabletMobile } = useProgressBar(
    rootRef,
    onRewindVideo,
    onRewindVideoByStep,
    onSpaceDown
  )

  const isShownPredictedTooltip = Math.abs(progress.percentage - pointerProgress) < 3

  return (
    <div
      ref={rootRef}
      role="progressbar"
      tabIndex={0}
      className={`${styles.progressBarRoot} ${className}`}
      onPointerDown={!isTabletMobile ? onPointerDown : undefined}
      onKeyDown={onKeyDown}
      onTouchStart={isTabletMobile ? onPointerDown : undefined}
    >
      <div className={styles.progressBar}>
        <div className={styles.buffering} style={{ width: `${bufferedPercentage}%` }}></div>
        <div
          className={`${styles.progress} ${!!pointerPressedProgress && styles.show}`}
          style={{
            width: `${pointerPressedProgress ?? progress.percentage}%`,
            transition: `${pointerPressedProgress ? 'none' : 'width 0.2s linear'}`
          }}
        ></div>
        {!isTabletMobile && (
          <div
            className={`${
              isShownPredictedTooltip || !!pointerPressedProgress
                ? styles.currentTimeTooltipHidden
                : styles.currentTimeTooltipShow
            }`}
            style={{ left: `${pointerPressedProgress ?? progress.percentage}%` }}
          >
            {getFormattedTime(progress.currentTime)}
          </div>
        )}
        <div
          className={`${styles.predictedTooltip} ${isTabletMobile && !!pointerPressedProgress && styles.shown}`}
          style={{ left: `${pointerProgress}%` }}
        >
          {getFormattedTime((pointerProgress * progress.duration) / 100)}
        </div>
      </div>
    </div>
  )
}

export default ProgressBar
