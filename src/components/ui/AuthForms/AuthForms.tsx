import { ReactNode } from 'react'

import styles from './styles.module.scss'

interface Props {
  children: ReactNode
}

const AuthForms = ({ children }: Props) => {
  return (
    <section className={styles.authFormsRoot}>
      <div className={styles.forms}>{children}</div>
    </section>
  )
}

export default AuthForms
