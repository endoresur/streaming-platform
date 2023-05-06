import Routes from 'constants/routes'
import { FeedVideo } from 'models/entityModels/video'
import Image from 'next/image'
import Link from 'next/link'
import { convertSecondsToVideoDuration } from 'utils/convert'
import styles from './styles.module.scss'

interface Props {
  video: FeedVideo
  hideAuthor?: boolean
}

const VideoCard = ({ video, hideAuthor = false }: Props) => {
  const { id, author, duration, isStream, image, publicationDate, title, viewsCount, videoLink } = video

  return (
    <div className={styles.videoCardRoot} key={id}>
      <Link href={`${Routes.VIDEO}${videoLink}`} passHref className={styles.imageWrapper}>
        <Image fill style={{ objectFit: 'cover' }} alt={image.alt} key={image.id} src={image.link} priority />
        <span className={styles.videoDuration}>{convertSecondsToVideoDuration(duration)}</span>
      </Link>
      <div className={styles.infoContainer}>
        <Link href={`${Routes.CHANNEL}${author.link}`} passHref className={styles.authorImageWrapper}>
          <Image
            key={author.image.id}
            src={author.image.link}
            alt={author.image.alt}
            fill
            style={{ objectFit: 'contain' }}
            priority
          />
        </Link>
        <div className={styles.videoInfo}>
          <Link href={`${Routes.VIDEO}${videoLink}`} passHref className={styles.title}>
            {title}
          </Link>
          {!hideAuthor && (
            <Link href={`${Routes.CHANNEL}${author.link}`} passHref className={styles.authorName}>
              {author.name}
            </Link>
          )}
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
