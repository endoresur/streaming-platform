import { Filter } from 'models/entityModels/feed'
import CategoryFilter from './CategoryFilter/CategoryFilter'
import styles from './styles.module.scss'

interface Props {
  filters: Filter[]
}

const FiltersList = ({ filters }: Props) => {
  return (
    <section className={styles.filtersListRoot}>
      {filters.map(filter => (
        <CategoryFilter filter={filter} />
      ))}
    </section>
  )
}

export default FiltersList
