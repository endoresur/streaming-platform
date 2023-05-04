import { FeedVideo } from './feed'

export interface MainPageResponse {
  filters: string[]
  videos: FeedVideo[]
}
