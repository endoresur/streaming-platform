import { Button } from 'antd'
import Routes from 'constants/routes'
import Link from 'next/link'
import { ReactNode } from 'react'
import styles from './styles.module.scss'

interface Props {
  children: ReactNode
  text: string
  rout: Routes
  onClick?: () => void
  buttonType?: 'default' | 'primary' | 'ghost' | 'dashed' | 'link' | 'text'
  className?: string
  isSmall?: boolean
}

const NavButton = ({ children, text, buttonType = 'default', className, onClick, isSmall, rout }: Props) => {
  return (
    <>
      <Button className={`${styles.navButtonRoot} ${className}`} type={buttonType} onClick={onClick} tabIndex={-1}>
        <Link href={rout} passHref className={`${styles.link} ${isSmall && styles.smallButton}`}>
          {children}
          <span>{text}</span>
        </Link>
      </Button>
    </>
  )
}

export default NavButton
