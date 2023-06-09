import { NextPage } from 'next'
import DinamicHLSVideoPlayer from 'components/features/HLSVideoPlayer/DinamicHLSVideoPlayer'
import ReactPlayer from 'react-player'

import { createVideoPageData } from 'utils/testDataCreate'
import Description from './components/Description'

import Comments from './components/Comments'
import Recommendations from './components/Recommendations'
import styles from './styles.module.scss'

const VideoPage: NextPage = () => {
  const data = createVideoPageData()

  return (
    <section className={styles.videoPageRoot}>
      {/* <DinamicHLSVideoPlayer videoLink="/static/videos/newVideo.webm" /> */}

      <div className={styles.playerWrapper}>
        <ReactPlayer
          url={'/static/videos/newVideo.webm'}
          // url={'/static/videos/video.mp4'}
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
          <Comments comments={data.comments} />
          <Recommendations videos={data.recommendedVideos} />
        </div>
      </div>
    </section>
  )
}

export default VideoPage
