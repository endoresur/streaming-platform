import SearchField from 'components/entities/SearchField'
import Icons from 'constants/icons'
import Routes from 'constants/routes'
import Link from 'next/link'
import { ReactSVG } from 'react-svg'
import styles from './styles.module.scss'

const Header = () => {
  console.log(Icons.header.menu)

  return (
    <header className={styles.hearedRoot}>
      <div className={styles.headerContainer}>
        <div className={styles.navContainer}>
          <button className={styles.navButton}>
            <ReactSVG src={Icons.header.menu} />
          </button>
          <Link href={Routes.INDEX} className={styles.indexLinkWrapper}>
            <ReactSVG src={Icons.common.logo} className={styles.logo} />
            <span className={styles.linkText}>Stream</span>
          </Link>
        </div>

        <div className={styles.searchContainer}>
          <SearchField />
        </div>

        <div className={styles.buttonsContainer}>
          <div>ygiu</div>
        </div>
      </div>
    </header>
  )
}

export default Header
