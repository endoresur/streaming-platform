import Link from 'next/link'
import { ReactSVG } from 'react-svg'
import styles from './styles.module.scss'

interface Props {
  text: string
  isLink?: boolean
  href?: string
  className?: string
  imageSrc?: string
  imagePosition?: 'left' | 'right'
}

const Button = ({ text, className, isLink, href, imagePosition, imageSrc }: Props) => {
  const InnerButton = () => {
    return (
      <>
        {imagePosition === 'left' && imageSrc && <ReactSVG src={imageSrc} />}
        <span className={styles.buttonText}>{text}</span>
        {imagePosition === 'right' && imageSrc && <ReactSVG src={imageSrc} />}
      </>
    )
  }

  return (
    <>
      {isLink ? (
        href && (
          <Link href={href} className={`${styles.buttonRoot} ${className}`}>
            <InnerButton />
          </Link>
        )
      ) : (
        <button className={`${styles.buttonRoot} ${className}`}>
          <InnerButton />
        </button>
      )}
    </>
  )
}

export default Button
