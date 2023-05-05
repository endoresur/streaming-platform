import dynamic from 'next/dynamic'

const DinamicHLSVideoPlayer = dynamic(() => import('./HLSVideoPlayer'), {
  ssr: false
})

export default DinamicHLSVideoPlayer
