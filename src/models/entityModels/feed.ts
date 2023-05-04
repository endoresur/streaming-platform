export interface Feed {}

export interface Author {
  name: string
  link: string
  image: string
}

export interface FeedVideo {
  id: number
  title: string
  imageLink: string
  videoLink: string
  author: Author
  viewsCount: number
  publicationDate: string
  duration: number
  isStream: boolean
}
