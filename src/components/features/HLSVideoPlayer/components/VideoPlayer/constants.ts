import { HlsConfig } from 'hls.js'


export const hlsConfig: Partial<HlsConfig> = {
  enableWorker: false,
  capLevelToPlayerSize: true,
  // maxBufferSize: 2 * 1000 * 1000,
  autoStartLoad: true
}

import { FullscreenApi } from './types'


export const defaultFullscreenApi: FullscreenApi = {
  requestFullscreen: 'requestFullscreen',
  exitFullscreen: 'exitFullscreen',
  fullscreenElement: 'fullscreenElement',
  fullscreenEnabled: 'fullscreenEnabled',
  fullscreenchange: 'fullscreenchange',
  fullscreenerror: 'fullscreenerror',
  fullscreen: 'fullscreen'
}

/**
 * browser API methods
 */

export const apiMap = [
  [
    'requestFullscreen',
    'exitFullscreen',
    'fullscreenElement',
    'fullscreenEnabled',
    'fullscreenchange',
    'fullscreenerror',
    'fullscreen'
  ],
  // WebKit
  [
    'webkitRequestFullscreen',
    'webkitExitFullscreen',
    'webkitFullscreenElement',
    'webkitFullscreenEnabled',
    'webkitfullscreenchange',
    'webkitfullscreenerror',
    '-webkit-full-screen'
  ],
  // Mozilla
  [
    'mozRequestFullScreen',
    'mozCancelFullScreen',
    'mozFullScreenElement',
    'mozFullScreenEnabled',
    'mozfullscreenchange',
    'mozfullscreenerror',
    '-moz-full-screen'
  ],
  // Microsoft
  [
    'msRequestFullscreen',
    'msExitFullscreen',
    'msFullscreenElement',
    'msFullscreenEnabled',
    'MSFullscreenChange',
    'MSFullscreenError',
    '-ms-fullscreen'
  ]
] as const
