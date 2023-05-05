import Routes from 'constants/routes'
import { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

import styles from './styles.module.scss'

const ChannelPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Канал</title>
      </Head>
      <section className={styles.channelPageRoot}>
        <h1>Страница пользователя</h1>
        <Link href={Routes.INDEX}>на главную</Link>
      </section>
    </>
  )
}

export default ChannelPage
