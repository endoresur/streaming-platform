import { Image } from './image'

export interface Feed {}

export interface Author {
  name: string
  link: string
  image: Image
}

export interface FeedVideo {
  id: number
  title: string
  image: Image
  videoLink: string
  author: Author
  viewsCount: number
  publicationDate: string
  duration: number
  isStream: boolean
  filters: Filter[]
}

export interface Filter {
  id: number
  title: string
  link: string
}
