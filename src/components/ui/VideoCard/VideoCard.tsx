import { FeedVideo } from 'models/entityModels/feed'
import Image from 'next/image'
import Link from 'next/link'
import styles from './styles.module.scss'

interface Props {
  video: FeedVideo
}

const VideoCard = ({ video }: Props) => {
  const { id, author, duration, isStream, imageLink, publicationDate, title, viewsCount, videoLink } = video

  return (
    <div className={styles.videoCardRoot} key={id}>
      <Link href={videoLink} passHref className={styles.imageWrapper}>
        <Image fill style={{ objectFit: 'cover' }} alt="" src={imageLink} priority />
      </Link>
      <div className={styles.infoContainer}>
        <Link href={author.link} passHref className={styles.authorImageWrapper}>
          <Image src={author.image} alt="" fill style={{ objectFit: 'contain' }} priority />
        </Link>
        <div className={styles.videoInfo}>
          <Link href={videoLink} passHref className={styles.title}>
            {title}
          </Link>
          <Link href={author.link} passHref className={styles.authorName}>
            {author.name}
          </Link>
          <div className={styles.viewsPublicationWrapper}>
            <span className={styles.viewsCount}>{viewsCount} просмотров</span>
            <span className={styles.publicationDate}>{publicationDate}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VideoCard
