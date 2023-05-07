import { Image } from './image'

export interface Feed {}

export interface Author {
  name: string
  link: string
  image: Image
  subscribersCount: number
  registrationDate: Date
}

export interface Filter {
  id: number
  title: string
  link: string
}

export interface Ratings {
  likes: number
  dislikes: number
}

export interface Comment {
  user: Author
  text: string
  publicationDate: string
  likes: Ratings
}
