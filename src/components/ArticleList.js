import { html, repeat } from './base.js';
import ListPagination from './ListPagination.js';
import './article-preview.js';
import './loading-spinner.js';

const ArticleList = ({
  onSetPage,
  totalPagesCount,
  currentPage,
  articles,
  loading,
}) => {
  if (loading && articles.length === 0) {
    return html` <loading-spinner></loading-spinner> `;
  }

  if (articles.length === 0) {
    return html`
      <div class="article-preview">No articles are here... yet</div>
    `;
  }

  return html`
    <div>
      ${repeat(
        articles,
        article => article.slug,
        article => html`
          <article-preview .article=${article}></article-preview>
        `
      )}
      ${ListPagination({ onSetPage, totalPagesCount, currentPage })}
    </div>
  `;
};

export default ArticleList;
