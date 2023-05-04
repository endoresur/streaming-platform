import { FeedVideo } from 'models/entityModels/feed'
import VideoCard from '../VideoCard'
import styles from './styles.module.scss'

interface Props {
  videos: FeedVideo[]
}

const VideoList = ({ videos }: Props) => {
  return (
    <section className={styles.videoListRoot}>
      {videos.map(video => (
        <VideoCard video={video} />
      ))}
    </section>
  )
}

export default VideoList
