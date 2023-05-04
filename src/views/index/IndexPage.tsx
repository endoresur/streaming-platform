import FiltersList from 'components/entities/FiltersList'
import VideoList from 'components/ui/VideoList'
import { NextPage } from 'next'
import Head from 'next/head'
import { createFeed, createFilters } from 'utils/testDataCreate'

import styles from './styles.module.scss'

const IndexPage: NextPage = () => {
  const feed = createFeed(20)
  const filters = createFilters(5)

  return (
    <>
      <Head>
        <title>Главная страница</title>
      </Head>
      <section className={styles.indexPageRoot}>
        <h2 className={styles.title}>Популярные видео</h2>
        <FiltersList filters={filters} />
        <VideoList videos={feed} />
      </section>
    </>
  )
}

export default IndexPage
