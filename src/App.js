import { useEffect, useState } from 'react';
import styles from './App.module.scss';
import PostsList from './components/PostsList/PostsList';
import Loading from './components/Loading/Loading';

function App() {
const [posts, setPost] = useState(null);
const [users, setUsers] = useState(null);
const [chunkedArray, setChunkedArray] = useState(null);
const [activePage, setActivePage] = useState(1);

useEffect(() => {
  fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(data => {setPost(data); sliceAnArray(data, 10)})
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

  if(posts && users){ return (
    <div className={styles.app}>
      <PostsList posts={chunkedArray[activePage-1]} users={users} />
      <section className={styles.pagination}>
        <button onClick={() => {
          if(activePage >= 2){
            setActivePage(activePage - 1);
          }
        }}>Prev</button>
        <caption>... {activePage} ...</caption>
        <button onClick={() => {
          if(activePage < chunkedArray.length){
            setActivePage(activePage + 1);
          }
        }}>Next</button>
      </section>
    </div>
  )} else {
    return (
      <div className={styles.app}><Loading/></div>
    )
  }
  ;
}

export default App;
