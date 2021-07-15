import { useEffect, useState } from 'react';
import styles from './Post.module.scss';
import Modal from '../Modal/Modal';

function Post({body, title, user, id}) {

  const [showedArticle, setShowedArticle] = useState('');

  const cutArticle = article => {
    const shortArticle = article.slice(0,12) + ' ...'
    setShowedArticle(shortArticle);
  }
  useEffect(() => {cutArticle(body)});


  return (
    <section id={id} className={styles.container}>
      <header>{title}</header>
      <article>
        {showedArticle}
        <Modal body={body} title={title} user={user}/>
        </article>
        <section className={styles.popUp}></section>
      <article className={styles.fullArticle}></article>
      <section>author: <span className={styles.author}>{user.name}</span></section>
    </section>
  );
}

export default Post;
