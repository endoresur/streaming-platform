import { MenuOutlined, PlayCircleOutlined } from '@ant-design/icons'
import { Layout, Menu, Popover, Button, Avatar } from 'antd'
import SearchField from 'components/entities/SearchField'
import Routes from 'constants/routes'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from './styles.module.scss'

interface Props {
  onNavButtonClick: () => void
}

const Header = ({ onNavButtonClick }: Props) => {
  const router = useRouter()
  const isAuthPage = router.pathname.includes('/auth')

  return (
    <Layout.Header className={styles.headerRoot}>
      <div className={styles.headerInner}>
        <div className={styles.headerLeft}>
          {!isAuthPage && (
            <button className={styles.navButton} onClick={onNavButtonClick}>
              <MenuOutlined />
            </button>
          )}

          <Link href={Routes.INDEX} className={styles.logo}>
            <PlayCircleOutlined />
            stream
          </Link>
        </div>

        <div className={styles.headerCenter}>
          <SearchField className={styles.searchInput} />
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
