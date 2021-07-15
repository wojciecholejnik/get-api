import { useEffect, useState } from 'react';
import styles from './App.module.scss';

function App() {
const [post, setPost] = useState(null);
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
      <div></div>
    </div>
  );
}

export default App;
