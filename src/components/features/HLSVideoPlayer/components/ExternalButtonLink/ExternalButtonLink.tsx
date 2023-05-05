import Link from 'next/link'
import { AnchorHTMLAttributes } from 'react'

import styles from './styles.module.scss'

export interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string
  children: string
  className?: string
}

const ExternalButtonLink = ({ href, children, className }: Props) => {
  return (
    <Link
      href={href}
      rel={'noreferrer noopener'}
      target={'_blank'}
      className={`${styles.externalButtonLinkRoot} ${className}`}
    >
      {children}
    </Link>
  )
}

export default ExternalButtonLink
