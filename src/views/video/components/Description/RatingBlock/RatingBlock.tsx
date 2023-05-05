import Icons from 'constants/icons'
import { Ratings } from 'models/entityModels/feed'
import { ReactSVG } from 'react-svg'
import styles from './styles.module.scss'

interface Props {
  rating: Ratings
}

const RatingBlock = ({ rating }: Props) => {
  return (
    <div className={styles.ratingBlockRoot}>
      <button className={styles.button}>
        <ReactSVG src={Icons.common.arrow} />
        <span>{rating.likes}</span>
      </button>
      <div className={styles.delimiter} />
      <button className={styles.button}>
        {rating.dislikes}
        <ReactSVG src={Icons.common.arrow} className={styles.arrow} />
      </button>
    </div>
  )
}

export default RatingBlock
