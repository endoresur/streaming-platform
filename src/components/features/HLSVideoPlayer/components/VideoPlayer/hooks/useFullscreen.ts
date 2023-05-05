import { useEffect, useState } from 'react'

import { apiMap, defaultFullscreenApi } from '../constants'
import { FullscreenApi } from '../types'


const useFullscreenApi = () => {
  const [fullscreenApi, setIsFullscreenApi] = useState<FullscreenApi>({
    isIosNoSpec: false
  })

  useEffect(() => {
    let browserApi
    const specApi = apiMap[0]

    /**
     * determine the supported set of functions
     * check for exitFullscreen function
     */

    for (let i = 0; i < apiMap.length; i++) {
      const exitFullscreenName = apiMap[i][1]

      if (exitFullscreenName in document) {
        browserApi = apiMap[i]
        break
      }
    }

    /**
     * map the browser API names to the spec API names
     */

    if (browserApi) {
      for (let i = 0; i < browserApi.length; i++) {
        ;(defaultFullscreenApi[specApi[i]] as any) = browserApi[i]
        setIsFullscreenApi(defaultFullscreenApi)
      }
    } else {
      setIsFullscreenApi({ isIosNoSpec: true })
    }
  }, [])

  return fullscreenApi
}

export default useFullscreenApi
