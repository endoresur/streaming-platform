import { Author, FeedVideo, Filter } from 'models/entityModels/feed'

export const createFeed = (count: number): FeedVideo[] => {
  const result: FeedVideo[] = []
  for (let i = 0; i < count; i++) result.push(createVideo())
  return result
}

export const createVideo = (): FeedVideo => {
  return {
    id: Math.floor(Math.random() * 1000),
    author: createAuthor(),
    duration: getRandomInt(10, 1000),
    image: {
      alt: createRandomString(10),
      id: getRandomInt(10, 1000),
      link: '/static/images/image.jpeg'
    },
    videoLink: `/${createRandomString(7)}`,
    publicationDate: '10.02.23',
    title: createRandomString(getRandomInt(10, 15)),
    viewsCount: 1234,
    isStream: false,
    filters: createFilters(3)
  }
}

export const createFilters = (count: number): Filter[] => {
  const result: Filter[] = []
  for (let i = 0; i < count; i++) result.push(createFilter())
  return result
}

export const createFilter = (): Filter => {
  return {
    id: getRandomInt(10, 1000),
    title: createRandomString(getRandomInt(4, 10)),
    link: `/${createRandomString(7)}`
  }
}

export const createRandomString = (length: number) => {
  let result = ''
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  const charactersLength = characters.length
  let counter = 0
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength))
    counter += 1
  }
  return result
}

export const createAuthor = (): Author => {
  return {
    image: {
      alt: createRandomString(10),
      id: getRandomInt(10, 1000),
      link: '/static/images/author.jpeg'
    },
    link: '/author',
    name: createRandomString(getRandomInt(5, 12))
  }
}

const getRandomInt = (min: number, max: number): number => {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min) + min)
}
