import { Component, html, ifDefined } from '../../components/base';

class CommentInput extends Component {
  static observedContext = ['stores'];

  static properties = {
    body: { type: String },
    currentUser: {},
  };

  constructor() {
    super();
    this.body = '';

    this.handleBodyChange = e => {
      this.body = e.target.value;
    };

    this.createComment = e => {
      e.preventDefault();
      this.stores.commentsStore
        .createComment({ body: this.body })
        .then(() => (this.body = ''));
    };
  }

  render() {
    const { isCreatingComment } = this.stores.commentsStore;
    return html`
      <form class="card comment-form" @submit=${this.createComment}>
        <div class="card-block">
          <textarea
            class="form-control"
            placeholder="Write a comment..."
            .value=${this.body}
            ?disabled=${isCreatingComment}
            @change=${this.handleBodyChange}
            rows="3">
          </textarea>
        </div>
        <div class="card-footer">
          <img
            src=${ifDefined(this.currentUser.image || undefined)}
            class="comment-author-img"
            alt="" /><button class="btn btn-sm btn-primary" type="submit">
            Post Comment
          </button>
        </div>
      </form>
    `;
  }
}

customElements.define('comment-input', CommentInput);
