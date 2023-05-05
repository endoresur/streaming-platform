import Icons from 'constants/icons'

export const LOCAL_STORAGE_VOLUME_KEY = 'sp_hls_volume'
export const LOCAL_STORAGE_PREV_VOLUME_KEY = 'sp_hls_prev_volume'
export const DEFAULT_VOLUME = 0.5
export const REWIND_TIME = 10

export enum SVGMainColor {
  red = 'red',
  white = 'white'
}

export const playerIcons = {
  play: {
    src: Icons.player.play,
    color: SVGMainColor.red
  },
  next: {
    src: Icons.player.next,
    color: SVGMainColor.red
  },
  pause: {
    src: Icons.player.pause,
    color: SVGMainColor.red
  },
  previous: {
    src: Icons.player.previous,
    color: SVGMainColor.red
  },
  restart: {
    src: Icons.player.restart,
    color: SVGMainColor.red
  },
  loading: {
    src: Icons.player.loading,
    color: SVGMainColor.white
  },
  silence: {
    src: Icons.player.silence,
    color: SVGMainColor.white
  },
  loudness: {
    src: Icons.player.loudness,
    color: SVGMainColor.white
  },
  soundLoud: {
    src: Icons.player.loudness,
    color: SVGMainColor.white
  },
  soundMedium: {
    src: Icons.player.soundMedium,
    color: SVGMainColor.white
  },
  soundQuiet: {
    src: Icons.player.soundQuite,
    color: SVGMainColor.white
  },
  back: {
    src: Icons.player.back,
    color: SVGMainColor.white
  },
  forward: {
    src: Icons.player.forward,
    color: SVGMainColor.white
  },
  collapse: {
    src: Icons.player.collapse,
    color: SVGMainColor.white
  },
  fullscreen: {
    src: Icons.player.fullscreen,
    color: SVGMainColor.white
  }
}
