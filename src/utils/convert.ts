export const convertSecondsToVideoDuration = (timestamp: number) => {
  const hours = Math.floor(timestamp / 3600)
  const minutes = Math.floor((timestamp % 3600) / 60)
  const seconds = Math.floor((timestamp % 3600) % 60)
  return (hours ? hours + ':' : '') + minutes + ':' + (seconds < 10 ? '0' : '') + seconds
}
