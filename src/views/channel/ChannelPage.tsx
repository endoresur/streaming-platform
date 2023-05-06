import AuthorBlock from 'components/ui/AuthorBlock'
import VideoList from 'components/ui/VideoList'
import Routes from 'constants/routes'
import { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { createAuthor, createChannel } from 'utils/testDataCreate'

import styles from './styles.module.scss'

const ChannelPage: NextPage = () => {
  const { author, bannerImage, feed, id } = createChannel()

  return (
    <>
      <Head>
        <title>Канал</title>
      </Head>
      <section className={styles.channelPageRoot} key={id}>
        <div className={styles.channelBanner}>
          <Image src={bannerImage.link} alt={bannerImage.alt} fill style={{ objectFit: 'cover' }} priority />
        </div>
        <div className={styles.pageContent}>
          <AuthorBlock
            author={author}
            style={{ imageClassName: styles.authorImage, authorClassName: styles.authorName }}
            needToShowSubscribers
            disableLink
          />
          <VideoList videos={feed} hideAuthor />
        </div>
      </section>
    </>
  )
}

export default ChannelPage
