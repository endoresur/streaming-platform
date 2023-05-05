import { NextPage } from 'next'
import DinamicHLSVideoPlayer from 'components/features/HLSVideoPlayer/DinamicHLSVideoPlayer'
import ReactPlayer from 'react-player'

import { createVideoPageData } from 'utils/testDataCreate'
import Description from './components/DescriptionBlock'

import styles from './styles.module.scss'
import CommentsBlock from './components/CommentsBlock'
import Recommendations from './components/Recommendations'

const VideoPage: NextPage = () => {
  const data = createVideoPageData()

  console.log(data)

  return (
    <section className={styles.videoPageRoot}>
      {/* <DinamicHLSVideoPlayer videoLink="/static/videos/newVideo.webm" /> */}

      <div className={styles.playerWrapper}>
        <ReactPlayer
          url={'/static/videos/newVideo.webm'}
          controls
          width="100%"
          height="100%"
          className={styles['react-player']}
        />
      </div>

      <div className={styles.videoPageData}>
        <Description />
        <div className={styles.underDescriptionBlock}>
          <CommentsBlock />
          <Recommendations />
        </div>
      </div>
    </section>
  )
}

export default VideoPage
