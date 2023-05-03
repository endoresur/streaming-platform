import { CloudOutlined, MenuOutlined, PlayCircleOutlined } from '@ant-design/icons'
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

  return (
    <Layout.Header className={styles.headerRoot}>
      <div className={styles.headerInner}>
        <div className={styles.headerLeft}>
          <button className={styles.navButton}>
            <MenuOutlined />
          </button>

          <Link href={Routes.INDEX} className={styles.logo}>
            <PlayCircleOutlined />
            stream
          </Link>
        </div>

        <div className={styles.headerRight}>
          <Popover trigger="click" content={<Link href={Routes.AUTH}>выйти</Link>}>
            <Avatar>A</Avatar>
          </Popover>
        </div>
      </div>
    </Layout.Header>
  )
}

export default Header
