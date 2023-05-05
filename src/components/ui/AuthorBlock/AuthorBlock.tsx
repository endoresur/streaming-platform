import { Author as AuthorBlock } from 'models/entityModels/feed'
import Image from 'next/image'
import Link from 'next/link'
import { ReactNode } from 'react'
import styles from './styles.module.scss'

interface Props {
  author: AuthorBlock
  needToShowSubscribers?: boolean
  children?: ReactNode
}

const AuthorBlock = ({ author, needToShowSubscribers = false, children }: Props) => {
  return (
    <div className={styles.authorRoot}>
      <Link href={author.link} passHref className={styles.authorImage}>
        <Image
          key={author.image.id}
          src={author.image.link}
          alt={author.image.alt}
          fill
          style={{ objectFit: 'contain' }}
          priority
        />
      </Link>
      <div className={styles.authorInfo}>
        <Link href={author.link} passHref className={styles.authorName}>
          {author.name}
        </Link>
        {needToShowSubscribers && (
          <span className={styles.subscribersCount}>{author.subscribersCount} подписчиков</span>
        )}
        {children}
      </div>
    </div>
  )
}

export default AuthorBlock
