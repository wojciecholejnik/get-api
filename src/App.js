import { useEffect, useState } from 'react';
import styles from './App.module.scss';
import PostsList from './components/PostsList/PostsList';
import Loading from './components/Loading/Loading';

function App() {
const [posts, setPosts] = useState(null);
const [users, setUsers] = useState(null);
const [chunkedArray, setChunkedArray] = useState(null);
const [activePage, setActivePage] = useState(1);

useEffect(() => {
  fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(data => {setPosts(data); sliceAnArray(data, 10)})
}, []);
useEffect(() => {
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => setUsers(data))
}, []);

const sliceAnArray = (arr, chunk) => {
  let chunkedArray = [];
  let index = 0;
  while (index < arr.length) {
    chunkedArray.push(arr.slice(index, index + chunk));
    index += chunk;
  }
  setChunkedArray(chunkedArray);
};


  const deleteOne = (post, id) => {
    fetch('https://jsonplaceholder.typicode.com/posts/' + id, {
      method: 'DELETE',
    });
    const indexOf = posts.indexOf(post);
    posts.splice(indexOf, 1);
    setPosts(posts);
    sliceAnArray(posts, 10)
  }

  if(posts && users && chunkedArray){
    return (
      <div className={styles.app}>
        <PostsList deleteOne={deleteOne} allPosts={posts} posts={chunkedArray[activePage-1]} users={users} />
        <section className={styles.pagination}>
          <button onClick={() => {
            if(activePage >= 2){
              setActivePage(activePage - 1);
            }
          }}>prev</button>
          <div>... {activePage} ...</div>
          <button onClick={() => {
            if(activePage < chunkedArray.length){
              setActivePage(activePage + 1);
                window.scrollTo(0, 0);
            }
          }}>next</button>
        </section>
      </div>
  )} else {
    return <div className={styles.app}><Loading/></div>
  };
}

export default App;
