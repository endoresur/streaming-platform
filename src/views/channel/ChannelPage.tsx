import { Button, Tabs } from 'antd'
import AuthorBlock from 'components/ui/AuthorBlock'
import VideoList from 'components/ui/VideoList'
import { FeedVideo } from 'models/entityModels/video'
import { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { createChannel } from 'utils/testDataCreate'
import Description from './components/Description'

import styles from './styles.module.scss'

const ChannelPage: NextPage = () => {
  const { author, bannerImage, feed, id, description } = createChannel()

  const getAuthorViews = () =>
    feed.reduce((accumulator: number, currentValue: FeedVideo) => accumulator + currentValue.viewsCount, 0)

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
          <div className={styles.authorBlock}>
            <AuthorBlock
              author={author}
              style={{ imageClassName: styles.authorImage, authorClassName: styles.authorName }}
              needToShowSubscribers
              disableLink
            >
              <Button className={styles.button}>Подписаться</Button>
            </AuthorBlock>
          </div>
          <div className={styles.tabsWrapper}>
            <Tabs
              defaultActiveKey="2"
              items={[
                {
                  key: '1',
                  label: <span className={styles.label}>Главная</span>,
                  children: <div>Главная</div>
                },
                {
                  key: '2',
                  label: <span className={styles.label}>Видео</span>,
                  children: <VideoList videos={feed} hideAuthor />
                },
                {
                  key: '3',
                  label: <span className={styles.label}>О канале</span>,
                  children: (
                    <Description
                      text={description}
                      authorRegistrationDate={author.registrationDate}
                      viewsCount={getAuthorViews()}
                    />
                  )
                }
              ]}
            />
          </div>
        </div>
      </section>
    </>
  )
}

export default ChannelPage
