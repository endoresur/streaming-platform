import { FeedVideo } from './video'

export interface MainPageResponse {
  filters: string[]
  videos: FeedVideo[]
}
