import Routes from 'constants/routes'
import { FeedVideo } from 'models/entityModels/video'
import Image from 'next/image'
import Link from 'next/link'
import styles from './styles.module.scss'

interface Props {
  videos: FeedVideo[]
}

const Recommendations = ({ videos }: Props) => {
  return (
    <section className={styles.recommendationsRoot}>
      <span className={styles.title}>Рекомендованные видео</span>
      {videos.map(({ author, image, videoLink, viewsCount, publicationDate, id, title }) => (
        <Link key={id} href={`${Routes.VIDEO}${videoLink}`} passHref className={styles.recommendationItem}>
          <div className={styles.image}>
            <Image src={image.link} alt={image.alt} fill style={{ objectFit: 'contain' }} priority />
          </div>
          <div className={styles.textBlock}>
            <span className={styles.videoName}>{title}</span>
            <Link href={`${Routes.CHANNEL}${author.link}`} passHref className={styles.authorLink}>
              {author.name}
            </Link>
            <span className={styles.info}>
              <span className={styles.views}>{viewsCount} просмотров</span>
              <span className={styles.publication}>{publicationDate}</span>
            </span>
          </div>
        </Link>
      ))}
    </section>
  )
}

export default Recommendations
