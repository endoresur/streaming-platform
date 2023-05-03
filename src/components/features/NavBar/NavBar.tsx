import { RightCircleOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import styles from './styles.module.scss'

interface Props {
  isNavOpen: boolean
}

const NavBar = ({ isNavOpen }: Props) => {
  console.log(isNavOpen)

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
