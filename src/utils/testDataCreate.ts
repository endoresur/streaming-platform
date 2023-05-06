import { ChannelPageResponse } from 'models/entityModels/channelPage'
import { Author, Comment, Filter, Ratings } from 'models/entityModels/feed'
import { FeedVideo, Video } from 'models/entityModels/video'

export const createChannel = (): ChannelPageResponse => {
  return {
    id: getRandomInt(100, 10000),
    author: createAuthor(),
    bannerImage: {
      link: '/static/images/image.jpeg',
      id: getRandomInt(100, 10000),
      alt: createRandomString(getRandomInt(5, 10))
    },
    feed: createFeed(getRandomInt(10, 30))
  }
}

export const createFeed = (count: number): FeedVideo[] => {
  const result: FeedVideo[] = []
  for (let i = 0; i < count; i++) result.push(createVideo())
  return result
}

export const createVideoPageData = (): Video => {
  return {
    id: getRandomInt(1, 10000),
    author: createAuthor(),
    comments: createComments(20),
    rating: createLikes(),
    publicationDate: '10.03.23',
    recommendedVideos: createFeed(10),
    title: createRandomText(getRandomInt(3, 5), getRandomInt(4, 8)),
    viewsCount: 12345,
    description: createRandomText(getRandomInt(10, 30), getRandomInt(4, 10))
  }
}

export const createLikes = (): Ratings => {
  return {
    likes: getRandomInt(10, 1000),
    dislikes: getRandomInt(10, 1000)
  }
}

export const createComments = (count: number): Comment[] => {
  const result: Comment[] = []

  for (let i = 0; i < count; i++) {
    result.push({
      likes: createLikes(),
      publicationDate: '05.05.23',
      text: createRandomText(getRandomInt(3, 15), getRandomInt(4, 10)),
      user: createAuthor()
    })
  }

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
    videoLink: `/qwer`,
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

export const createRandomText = (wordsCount: number, wordLength: number): string => {
  const result: string[] = []

  for (let i = 0; i < wordsCount; i++) {
    result.push(createRandomString(wordLength))
  }

  return result.join(' ')
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
    link: '/user',
    name: createRandomString(getRandomInt(5, 12)),
    subscribersCount: getRandomInt(100, 1000)
  }
}

const getRandomInt = (min: number, max: number): number => {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min) + min)
}
