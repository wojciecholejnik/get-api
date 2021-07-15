import { useEffect, useState } from 'react';
import styles from './App.module.scss';

import Post from './components/Post/Post'

function App() {
const [posts, setPost] = useState(null);
const [users, setUsers] = useState(null);

useEffect(() => {
  fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(data => setPost(data))
}, []);
useEffect(() => {
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => setUsers(data))
}, []);

  return (
    <div className={styles.app}>
      <div className={styles.posts}>
        {posts && users ? posts.map(post => (
          <Post
            user={users.find(user => user.id === post.userId)} title={post.title}
            body={post.body}
            id={post.id}
            key={post.id}/>
        )) : ''}
      </div>
    </div>
  );
}

export default App;
