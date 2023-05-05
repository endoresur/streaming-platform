export const getFormattedTime = (sec = 0): string => {
  const hours = Math.floor(sec / 3600)
  const minCommonValue = sec % 3600
  const minutes = Math.floor(minCommonValue / 60)
  const seconds = Math.floor(minCommonValue % 60)

  /**
   * Display hours
   */

  const hDisplay = hours > 0 ? hours.toString() : ''

  /**
   * Display minutes
   */

  const mDisplayWithValue = minutes < 10 && hDisplay ? `0${minutes}` : minutes.toString()
  const mDisplayWithoutValue = hDisplay ? '00' : '0'

  const mDisplay = minutes > 0 ? mDisplayWithValue : mDisplayWithoutValue

  /**
   * Display seconds
   */

  const sDisplayWithValue = seconds < 10 ? `0${seconds}` : seconds.toString()

  const sDisplay = seconds > 0 ? sDisplayWithValue : '00'

  if (hDisplay) return `${hDisplay}:${mDisplay}:${sDisplay}`
  else return `${mDisplay}:${sDisplay}`
}
