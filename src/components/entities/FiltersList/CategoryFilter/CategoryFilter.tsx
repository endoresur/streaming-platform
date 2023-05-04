import { Filter } from 'models/entityModels/feed'
import styles from './styles.module.scss'

interface Props {
  filter: Filter
}

const CategoryFilter = ({ filter }: Props) => {
  return (
    <button className={styles.categoryFilterRoot} key={filter.id}>
      <span className={styles.filterText}>{filter.title}</span>
    </button>
  )
}

export default CategoryFilter
