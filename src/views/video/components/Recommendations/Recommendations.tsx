import AuthorBlock from 'components/ui/AuthorBlock'
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
      {videos.map(({ author, image, videoLink, viewsCount, publicationDate }) => (
        <Link href={`${Routes.VIDEO}${videoLink}`} passHref className={styles.recommendationItem}>
          <div className={styles.image}>
            <Image src={image.link} alt={image.alt} fill />
          </div>
          <div className={styles.textBlock}>
            <span className={styles.videoName}>
              rtcytuvybiu gvhbjkl uvgb gvhb cvgbh cv vbuh yvtubh vgbh tfugyiuh tuvybi ctvyuyb
            </span>
            <Link href={author.link} passHref className={styles.authorLink}>
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
