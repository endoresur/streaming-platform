import { ReactNode } from 'react'
import styles from './styles.module.scss'

interface Props {
  text: string
  authorRegistrationDate: Date
  viewsCount: number
  children?: ReactNode
}

const Description = ({ text, authorRegistrationDate, viewsCount, children }: Props) => {
  return (
    <div className={styles.descriptionRoot}>
      <div className={styles.description}>
        <span className={styles.descriptionTitle}>Описание</span>
        <p className={styles.descriptionText}>{text}</p>
        {children}
      </div>
      <div className={styles.statistic}>
        <span className={styles.descriptionTitle}>Статистика</span>
        <span className={styles.statisticText}>
          Дата регистрации: {authorRegistrationDate.toUTCString().toString()}
        </span>
        <span className={styles.statisticText}>{viewsCount} просмотров</span>
      </div>
    </div>
  )
}

export default Description
