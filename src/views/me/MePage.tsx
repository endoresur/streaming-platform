import Routes from 'constants/routes'
import { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

const MePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Личный кабинет</title>
      </Head>
      <section>
        <h1>Личный кабинет</h1>
        <Link href={Routes.INDEX}>на главную</Link>
      </section>
    </>
  )
}

export default MePage
