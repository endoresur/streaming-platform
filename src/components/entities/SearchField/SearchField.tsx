import styles from './styles.module.scss'

const SearchField = () => {
  return (
    <div className={styles.searchFieldRoot}>
      <input type="text" className={styles.input} placeholder="Введите запрос" />
    </div>
  )
}

export default SearchField
