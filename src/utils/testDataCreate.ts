import { Author, FeedVideo } from 'models/entityModels/feed'

export const createFeed = (count: number): FeedVideo[] => {
  const result: FeedVideo[] = []
  for (let i = 0; i < count; i++) result.push(createVideo())
  return result
}

export const createVideo = (): FeedVideo => {
  return {
    id: Math.floor(Math.random() * 1000),
    author: createAuthor(),
    duration: 10,
    imageLink: '/static/images/image.jpeg',
    videoLink: `/${createRandomString(7)}`,
    publicationDate: '10.02.23',
    title: createRandomString(getRandomInt(10, 15)),
    viewsCount: 1234,
    isStream: false
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
    image: '/static/images/author.jpeg',
    link: '/author',
    name: createRandomString(getRandomInt(5, 12))
  }
}

const getRandomInt = (min: number, max: number): number => {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min) + min)
}
