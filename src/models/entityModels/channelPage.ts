import { Author } from './feed'
import { Image } from './image'
import { FeedVideo } from './video'

export interface ChannelPageResponse {
  id: number
  bannerImage: Image
  author: Author
  feed: FeedVideo[]
}
