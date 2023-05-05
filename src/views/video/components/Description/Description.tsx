import { Author, Ratings } from 'models/entityModels/feed'

import RatingBlock from './RatingBlock'
import styles from './styles.module.scss'
import AuthorBlock from 'components/ui/AuthorBlock'

interface Props {
  title: string
  author: Author
  viewsCount: number
  publicationDate: string
  rating: Ratings
  description: string
}

const Description = ({ title, author, viewsCount, publicationDate, rating, description }: Props) => {
  return (
    <section className={styles.descriptionRoot}>
      <div className={styles.leftContainer}>
        <h2 className={styles.title}>{title}</h2>
        <AuthorBlock author={author} needToShowSubscribers />
        <span className={styles.views}>{viewsCount} просмотров</span>
        <span className={styles.publication}>опубликовано {publicationDate}</span>
      </div>
      <div className={styles.rightContainer}>
        <RatingBlock rating={rating} />
      </div>
      <div className={styles.descriptionBlock}>{description}</div>
    </section>
  )
}

export default Description
