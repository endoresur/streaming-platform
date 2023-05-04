import { Layout } from 'antd'
import { HeartOutlined, RightCircleOutlined, YoutubeOutlined } from '@ant-design/icons'
import NavButton from 'components/ui/NavButton'
import Routes from 'constants/routes'
import styles from './styles.module.scss'
import { useEffect } from 'react'

interface Props {
  isNavOpen: boolean
  isAuthPage: boolean
  isVideoPage: boolean
  onSwitchNavBar: (value?: boolean) => void
}

const NavBar = ({ isNavOpen, isAuthPage, isVideoPage, onSwitchNavBar }: Props) => {
  const { Sider } = Layout

  useEffect(() => {
    onSwitchNavBar(!isVideoPage)
  }, [isVideoPage])

  return (
    <>
      {!isAuthPage && (
        <>
          <Sider
            theme="light"
            width="220px"
            collapsed={!isNavOpen}
            collapsedWidth="120px"
            className={`
              ${styles.navBarRoot} 
              ${isVideoPage && styles.hideNavBar} 
              ${isNavOpen && isVideoPage && styles.showNavBar}
            `}
          >
            <div className={styles.navbar}>
              <NavButton text="В тренде" className={styles.button} rout={Routes.INDEX} isSmall={!isNavOpen}>
                <RightCircleOutlined />
              </NavButton>
              <NavButton text="Подписки" className={styles.button} rout={Routes.ME} isSmall={!isNavOpen}>
                <HeartOutlined />
              </NavButton>
              <NavButton text="Стримы" className={styles.button} rout={Routes.AUTH} isSmall={!isNavOpen}>
                <YoutubeOutlined />
              </NavButton>
            </div>
          </Sider>
          {!isVideoPage && <div className={`${styles.navbarBack} ${!isNavOpen && styles.collapsedNav}`} />}
        </>
      )}
    </>
  )
}

export default NavBar
