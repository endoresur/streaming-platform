import { Button } from 'antd'
import { ReactNode, useEffect } from 'react'
import styles from './styles.module.scss'

interface Props {
  children: ReactNode
  text: string
  onClick: () => void
  buttonType?: 'default' | 'primary' | 'ghost' | 'dashed' | 'link' | 'text'
  className?: string
  isSmall?: boolean
}

const NavButton = ({ children, text, buttonType = 'default', className, onClick, isSmall }: Props) => {
  return (
    <>
      <Button
        className={`${styles.navButtonRoot} ${isSmall && styles.smallButton} ${className}`}
        type={buttonType}
        role="link"
        onClick={onClick}
      >
        {children}
        <span>{text}</span>
      </Button>
    </>
  )
}

export default NavButton
