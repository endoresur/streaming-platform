import { Author, Comment, Filter, Ratings } from './feed'
import { Image } from './image'

export interface VideoBase {
  id: number
  title: string
  author: Author
  viewsCount: number
  publicationDate: string
}

export interface FeedVideo extends VideoBase {
  image: Image
  videoLink: string
  duration: number
  isStream: boolean
  filters: Filter[]
}

export interface Video extends VideoBase {
  rating: Ratings
  comments: Comment[]
  recommendedVideos: FeedVideo[]
  description: string
}
