import { InputHTMLAttributes, MouseEventHandler, RefObject } from 'react'
import { ReactSVG } from 'react-svg'

import { SVGMainColor } from '../../constants'

import styles from './styles.module.scss'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  iconSrc: string
  color: SVGMainColor
  onClick?: MouseEventHandler
  playButtonRef?: RefObject<HTMLButtonElement>
}

const PlayerButton = ({ iconSrc, onClick, color, playButtonRef, className, disabled = false }: Props) => {
  return (
    <button
      ref={playButtonRef}
      disabled={disabled}
      className={`${color === SVGMainColor.red ? styles.buttonRed : styles.buttonWhite} ${className}`}
      onClick={onClick}
    >
      <ReactSVG src={iconSrc} className={styles.iconContainer} />
    </button>
  )
}

export default PlayerButton
