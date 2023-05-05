import { NextPage } from 'next'
import DinamicHLSVideoPlayer from 'components/features/HLSVideoPlayer/DinamicHLSVideoPlayer'

import styles from './styles.module.scss'

const VideoPage: NextPage = () => {
  return (
    <section className={styles.videoPageRoot}>
      {/* <DinamicHLSVideoPlayer videoLink="/static/videos/video.mp4" /> */}
      {/* <DinamicHLSVideoPlayer videoLink="/static/videos/newVideo.webm" /> */}
      {/* <DinamicHLSVideoPlayer videoLink="https://2ch.hk/b/src/286705727/16832778967670.webm" /> */}
      {/* <DinamicHLSVideoPlayer videoLink="https://2ch.hk/b/src/286694640/16832476981630.mp4" /> */}
      {/* <video src="https://2ch.hk/b/src/286694640/16832476981630.mp4" controls></video> */}
      {/* <video src="https://2ch.hk/b/src/286698519/16832568651330.webm" controls></video> */}
      <video src="/static/videos/newVideo.webm" controls></video>
    </section>
  )
}

export default VideoPage
