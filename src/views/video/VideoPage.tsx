import { NextPage } from 'next'
import DinamicHLSVideoPlayer from 'components/features/HLSVideoPlayer/DinamicHLSVideoPlayer'
import ReactPlayer from 'react-player'

import { createVideoPageData } from 'utils/testDataCreate'
import Description from './components/Description'

import styles from './styles.module.scss'
import Comments from './components/Comments'
import Recommendations from './components/Recommendations'
import { useRef } from 'react'

const VideoPage: NextPage = () => {
  const data = createVideoPageData()

  const video = useRef<ReactPlayer>(null)

  return (
    <section className={styles.videoPageRoot}>
      {/* <DinamicHLSVideoPlayer videoLink="/static/videos/newVideo.webm" /> */}

      <div className={styles.playerWrapper}>
        <ReactPlayer
          url={'/static/videos/newVideo.webm'}
          controls
          width="100%"
          height="100%"
          className={styles.reactPlayer}
        />
      </div>

      <div className={styles.videoPageData}>
        <Description
          title={data.title}
          author={data.author}
          description={data.description}
          rating={data.rating}
          publicationDate={data.publicationDate}
          viewsCount={data.viewsCount}
        />
        <div className={styles.underDescriptionBlock}>
          <Comments />
          <Recommendations />
        </div>
      </div>
    </section>
  )
}

export default VideoPage
