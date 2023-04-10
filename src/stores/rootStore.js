import CommonStore from './commonStore'
import UserStore from './userStore'

class RootStore {
  constructor() {
    this.commonStore = new CommonStore()
    this.userStore = new UserStore()
  }
}

export default RootStore
