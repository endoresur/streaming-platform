import { RightCircleOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import styles from './styles.module.scss'

const NavBar = () => {
  return (
    <div className={styles.navBarRoot}>
      <Button className={styles.button} type="default">
        <RightCircleOutlined />
        Популярное
      </Button>
    </div>
  )
}

export default NavBar
