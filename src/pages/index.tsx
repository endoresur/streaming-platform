import Routes from 'constants/routes'
import { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

const IndexPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Главная страница</title>
      </Head>
      <section>
        <h1>Streamin Service</h1>
        <Link href={Routes.ME}>в личный кабинет</Link>
      </section>
    </>
  )
}

export default IndexPage
