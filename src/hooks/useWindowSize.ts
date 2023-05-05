import { useEffect, useState } from 'react'

type useWindowSizeState = {
  width: number | undefined
  height: number | undefined
  isDesktop: boolean
  isTablet: boolean
  isMobile: boolean
}

const widthBreakpoints = {
  desktopLarge: 1920,
  desktop: 1280,
  tablet: 768,
  mobile: 320
}

function useWindowSize() {
  const [windowSize, setWindowSize] = useState<useWindowSizeState>({
    width: undefined,
    height: undefined,
    isDesktop: false,
    isTablet: false,
    isMobile: false
  })

  useEffect(() => {
    const handleResize = () =>
      setWindowSize({
        width: window.innerWidth,
        height: window.document.documentElement.clientHeight,
        isDesktop: window.innerWidth >= widthBreakpoints.desktop,
        isTablet: window.innerWidth <= widthBreakpoints.desktop - 1 && window.innerWidth >= widthBreakpoints.tablet,
        isMobile: window.innerWidth <= widthBreakpoints.tablet - 1
      })

    window.addEventListener('resize', handleResize)

    handleResize()

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return windowSize
}

export default useWindowSize
