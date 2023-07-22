import ArticlesStore from './articlesStore';
import CommonStore from './commonStore';
import UserStore from './userStore';
import CommentsStore from './commentsStore';
import AuthStore from './authStore';

class RootStore {
  constructor() {
    this.commonStore = new CommonStore();
    this.userStore = new UserStore();
    this.authStore = new AuthStore();
    this.articlesStore = new ArticlesStore();
    this.commentsStore = new CommentsStore();
  }
}

export default RootStore;
