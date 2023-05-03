import { CloudOutlined, PlayCircleOutlined } from '@ant-design/icons'
import { Layout, Menu, Popover, Button, Avatar } from 'antd'
import SearchField from 'components/entities/SearchField'
import Icons from 'constants/icons'
import Routes from 'constants/routes'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { ReactSVG } from 'react-svg'
import styles from './styles.module.scss'

const Header = () => {
  const router = useRouter()

  // return (
  //   <header className={styles.headerRoot}>
  //     <div className={styles.headerContainer}>
  //       <div className={styles.navContainer}>
  //         <button className={styles.navButton}>
  //           <ReactSVG src={Icons.header.menu} />
  //         </button>
  //         <Link href={Routes.INDEX} className={styles.indexLinkWrapper}>
  //           <ReactSVG src={Icons.common.logo} className={styles.logo} />
  //           <span className={styles.linkText}>Stream</span>
  //         </Link>
  //       </div>

  //       <div className={styles.searchContainer}>
  //         <SearchField />
  //       </div>

  //       <div className={styles.buttonsContainer}>
  //         <Button text="Войти" href={Routes.ME} isLink imagePosition="right" imageSrc={Icons.common.user} />
  //       </div>
  //     </div>
  //   </header>
  // )

  return (
    <Layout.Header className={styles.headerRoot}>
      <div className={styles.headerInner}>
        <div className={styles.headerLeft}>
          <Link href={Routes.INDEX} className={styles.logo}>
            <PlayCircleOutlined />
            STREAM
          </Link>
        </div>

        <div className={styles.headerRight}>
          <Popover
            trigger="click"
            content={
              <Button onClick={() => console.log('hbkj')} type="primary" danger>
                Выйти
              </Button>
            }
          >
            <Avatar>A</Avatar>
          </Popover>
        </div>
      </div>
    </Layout.Header>
  )
}

export default Header
