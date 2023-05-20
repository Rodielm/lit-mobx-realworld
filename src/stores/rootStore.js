import ArticlesStore from './articlesStore'
import CommonStore from './commonStore'
import UserStore from './userStore'

class RootStore {
  constructor() {
    this.commonStore = new CommonStore()
    this.userStore = new UserStore()
    this.articlesStore = new ArticlesStore()
  }
}

export default RootStore
