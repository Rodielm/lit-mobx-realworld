import { marked } from 'marked';

import { Component, unsafeHTML, html } from '../../components/base';
import ArticleMeta from './ArticleMeta';
import CommentContainer from './CommentContainer';
import '../../components/red-error';

class ArticlePage extends Component {
  static observedContexts = ['stores'];

  static properties = {
    slug: { type: String },
  };

  set $route(value) {
    this.slug = value.params.id;
  }

  connectedCallback() {
    super.connectedCallback();
    const slug = this.slug;
    this.stores.articlesStore.loadArticle(slug, { acceptCached: true });
    this.stores.commentsStore.setArticleSlug(slug);
    this.stores.commentsStore.loadComments();
  }

  handleDeleteArticle = slug => {
    this.deleting = true;
    this.stores.articlesStore
      .deleteArticle(slug)
      .then(() => this.$route.replaceWith('home'))
      .finally(() => (this.deleting = false));
  };

  handleDeleteComment = id => {
    this.context.stores.commentsStore.deleteComment(id);
  };

  render() {
    const slug = this.slug;
    const { currentUser } = this.stores.userStore;
    const { comments, commentErrors } = this.stores.commentsStore;
    const article = this.stores.articlesStore.getArticle(slug);

    if (this.deleting) {
      return html` <loading-spinner></loading-spinner> `;
    }

    if (!article) {
      return html` <red-error message="Can't load article"> </red-error> `;
    }

    // install libs to sanitize,mangle
    const markup = marked.parse(article.body, {
      sanitize: false,
      mangle: false,
      headerIds: false,
    });
    const canModify =
      currentUser && currentUser.username === article.author.username;
    return html`
      <div class="article-page">
        <div class="banner">
          <div class="container">
            <h1>${article.title}</h1>
            ${ArticleMeta({
              article,
              canModify,
              onDelete: this.handleDeleteArticle,
            })}
          </div>
        </div>
        <div class="container page">
          <div class="row article-content">
            <div class="col-xs-12">
              ${unsafeHTML(markup)}

              <ul class="tag-list">
                ${article.tagList.map(tag => {
                  return html`
                    <li class="tag-default tag-pill tag-outline">${tag}</li>
                  `;
                })}
              </ul>
            </div>
          </div>
          <hr />
          <div class="article-actions"></div>
          <div class="row">
            ${CommentContainer({
              comments,
              errors: commentErrors,
              slug,
              currentUser,
              onDelete: this.handleDeleteComment,
            })}
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('article-page', ArticlePage);
