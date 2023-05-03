import { HeartOutlined, RightCircleOutlined, YoutubeOutlined } from '@ant-design/icons'
import NavButton from 'components/ui/NavButton'
import Routes from 'constants/routes'
import styles from './styles.module.scss'

interface Props {
  isNavOpen: boolean
}

const NavBar = ({ isNavOpen }: Props) => {
  return (
    <div className={styles.navBarRoot}>
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
  )
}

export default NavBar
