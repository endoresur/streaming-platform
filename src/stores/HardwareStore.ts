import { makeAutoObservable } from 'mobx'

import RootStore from './RootStore'

export default class HardwareStore {
  private _rootStore: RootStore

  isMac = false
  isIOS = false
  isAndroid = false
  isTabletMobile = false

  constructor(rootStore: RootStore) {
    this._rootStore = rootStore
    makeAutoObservable(this)
  }

  /**
   * @param UA userAgent
   * @returns boolean of mobile or tablete device
   */

  checkIsTabletMobilePlatform(UA: string) {
    const maxTouchPoints = window.navigator.maxTouchPoints
    const mobileUAParts = [/Android/i, /webOS/i, /iPhone/i, /iPad/i, /iPod/i, /BlackBerry/i, /Windows Phone/i]
    const isIPad = (maxTouchPoints && maxTouchPoints > 2 && /Macintosh/i.test(UA)) || /MacIntel/i.test(UA)

    return mobileUAParts.some(uaPart => {
      return UA.match(uaPart) || isIPad
    })
  }

  setMobilePlatforms(UA: string) {
    this.isMac = ['Macintosh', 'MacIntel'].indexOf(UA) !== -1
    this.isIOS = /iP(hone|od|ad)/.test(UA)
    this.isAndroid = /Android/.test(UA)
    this.isTabletMobile = this.checkIsTabletMobilePlatform(UA)
  }
}
