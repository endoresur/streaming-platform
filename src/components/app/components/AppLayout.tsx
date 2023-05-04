import { Layout } from 'antd'
import Header from 'components/features/Header'
import NavBar from 'components/features/NavBar'
import Routes from 'constants/routes'
import { useRouter } from 'next/router'
import { ReactNode, useState } from 'react'

import styles from './styles.module.scss'

interface Props {
  children: ReactNode
}

const AppLayout = ({ children }: Props) => {
  const router = useRouter()
  const [isNavOpen, setIsNavOpen] = useState(true)

  const { Footer, Content } = Layout
  const isAuthPage = router.pathname.includes('/auth')
  const isVideoPage = router.asPath.includes(Routes.VIDEO)

  const onSwitchNavBar = (value?: boolean) => setIsNavOpen(value ?? !isNavOpen)

  return (
    <Layout>
      <Header onNavButtonClick={onSwitchNavBar} />
      <Layout>
        <NavBar
          isNavOpen={isNavOpen}
          isAuthPage={isAuthPage}
          isVideoPage={isVideoPage}
          onSwitchNavBar={onSwitchNavBar}
        />
        <Content className={`${isAuthPage ? styles.authContent : styles.content}`}>{children}</Content>
      </Layout>
      {!isAuthPage && <Footer className={`${styles.footer} ${!isNavOpen && styles.navClosed}`}>Footer</Footer>}
    </Layout>
  )
}

export default AppLayout
