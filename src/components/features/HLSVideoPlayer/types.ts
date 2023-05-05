export interface Progress {
  percentage: number
  currentTime: number
  duration: number
}

export interface VideoPlayerProps {
  videoLink: string
  className?: string
  externalLink?: {
    title: string
    link: string
  }
}
