import { useEffect, useState } from 'react';
import styles from './Post.module.scss';
import Modal from '../Modal/Modal';

function Post({body, title, user, id, post, allPosts, deleteOne}) {

  const [showedArticle, setShowedArticle] = useState('');

  const cutArticle = article => {
    const shortArticle = article.slice(0,18) + ' ...'
    setShowedArticle(shortArticle);
  }
  useEffect(() => {cutArticle(body)});

  return (
    <section id={id} className={styles.container}>
      <header>{title}</header>
      <section>author: <span className={styles.author}>{user.name}</span></section>
      <article>
        {showedArticle}
        <div className={styles.buttonContainer}>
          <Modal deleteOne={deleteOne} post={post} id={id} body={body} title={title} user={user}/>
          <button
            onClick={() => {
              deleteOne(post, id);
          }}
          className={styles.buttonDelete}
          >delete</button>
        </div>
        </article>
    </section>
  );
}

export default Post;
