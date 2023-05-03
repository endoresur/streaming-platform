import { Input } from 'antd'
import styles from './styles.module.scss'

interface Props {
  className?: string
}

const SearchField = ({ className }: Props) => {
  const { Search } = Input

  return (
    <>
      <Search placeholder="Введите запрос" className={`${styles.searchFieldRoot} ${className}`} />
    </>
  )
}

export default SearchField
