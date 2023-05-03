import { Layout } from 'antd'
import Header from 'components/features/Header'
import NavBar from 'components/features/NavBar'
import { useRouter } from 'next/router'
import { ReactNode, useState } from 'react'

import styles from './styles.module.scss'

interface Props {
  children: ReactNode
}

const AppLayout = ({ children }: Props) => {
  const router = useRouter()
  const [isNavOpen, setIsNavOpen] = useState(true)

  const { Footer, Sider, Content } = Layout
  const isAuthPage = router.pathname.includes('/auth')

  const onNavButtonClick = () => setIsNavOpen(!isNavOpen)

  return (
    <Layout>
      <Header onNavButtonClick={onNavButtonClick} />
      <Layout>
        {!isAuthPage && (
          <Sider theme="light" className={styles.navbar}>
            <NavBar isNavOpen={isNavOpen} />
          </Sider>
        )}
        <Content className={!isAuthPage ? styles.content : styles.authContent}>{children}</Content>
      </Layout>
      {!isAuthPage && <Footer className={styles.footer}>Footer</Footer>}
    </Layout>
  )
}

export default AppLayout
