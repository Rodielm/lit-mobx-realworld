import { html, nothing } from 'components/base';

const DeleteButton = props => {
  const handleClick = () => props.onDelete(props.commentId);

  if (props.show) {
    return html`
      <span class="mod-options">
        <i class="ion-trash-a" @click=${handleClick}></i>
      </span>
    `;
  }
  return nothing;
};

export default DeleteButton;
