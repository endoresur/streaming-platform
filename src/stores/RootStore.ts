import HardwareStore from './HardwareStore'

export default class RootStore {
  hardwareStore: HardwareStore

  constructor() {
    this.hardwareStore = new HardwareStore(this)
  }
}

export const rootStore = new RootStore()
