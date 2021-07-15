import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import styles from './Modal.module.scss';

function Modal({body, title, user}) {
  return (
    <Popup trigger={<button className="button"> Show more</button>} modal>
      <header>{title}</header>
      <section>author: <span className={styles.author}>{user.name}</span></section>
      <article>{body}</article>
    </Popup>
  );
}

export default Modal;