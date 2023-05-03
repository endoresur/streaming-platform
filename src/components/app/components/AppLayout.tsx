import { Layout } from 'antd'
import Header from 'components/features/Header'
import NavBar from 'components/features/NavBar'
import { ReactNode } from 'react'

import styles from './styles.module.scss'

interface Props {
  children: ReactNode
}

const AppLayout = ({ children }: Props) => {
  const { Footer, Sider, Content } = Layout

  return (
    <Layout>
      <Header />
      <Layout>
        <Sider theme="light" className={styles.navbar}>
          <NavBar />
        </Sider>
        <Content className={styles.content}>
          <div className={styles.pageContent}>{children}</div>
          <Footer>Footer</Footer>
        </Content>
      </Layout>
    </Layout>
  )
}

export default AppLayout
