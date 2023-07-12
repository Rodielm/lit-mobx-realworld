import Comment from './Comment';
import { html } from 'lit';
import { repeat } from '../../components/base';

const CommentList = props => {
  const { currentUser, onDelete, slug } = props;
  return html`
    <div>
      ${repeat(
        props.comments,
        comment => comment.id,
        comment => Comment({ comment, currentUser, onDelete, slug })
      )}
    </div>
  `;
};

export default CommentList;
