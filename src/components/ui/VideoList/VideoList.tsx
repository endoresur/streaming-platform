import { FeedVideo } from 'models/entityModels/video'
import VideoCard from '../VideoCard'
import styles from './styles.module.scss'

interface Props {
  videos: FeedVideo[]
  hideAuthor?: boolean
}

const VideoList = ({ videos, hideAuthor }: Props) => {
  return (
    <section className={styles.videoListRoot}>
      {videos.map(video => (
        <VideoCard video={video} hideAuthor={hideAuthor} />
      ))}
    </section>
  )
}

export default VideoList
