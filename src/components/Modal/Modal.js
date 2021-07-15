import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import './Modal.css';

function Modal({body, title, user, deleteOne, post, id}) {
  return (
    <Popup trigger={<button className="button">more</button>} position='center center' arrow modal >
      <header>{title}</header>
      <section>author: <span className='author'>{user.name}</span></section>
      <article>{body}</article>
      <button className='deleteButton'
      onClick={() => {
            deleteOne(post, id);
        }}>delete</button>
    </Popup>
  );
}

export default Modal;