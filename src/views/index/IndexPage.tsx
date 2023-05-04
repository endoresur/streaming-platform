import VideoCard from 'components/ui/VideoCard'
import VideoList from 'components/ui/VideoList'
import { MainPageResponse } from 'models/entityModels/mainPage'
import { NextPage } from 'next'
import Head from 'next/head'
import { createFeed } from 'utils/testDataCreate'

const IndexPage: NextPage = () => {
  const feed = createFeed(10)

  return (
    <>
      <Head>
        <title>Главная страница</title>
      </Head>
      <section>
        <VideoList videos={feed} />
      </section>
    </>
  )
}

export default IndexPage
