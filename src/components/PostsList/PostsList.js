import Post from '../Post/Post';
import styles from './PostsList.module.scss';

function PostsList ({posts, users}) {
return (
  <div className={styles.container}>
    {posts.map(post => (
      <Post
        user={users.find(user => user.id === post.userId)}
        title={post.title}
        body={post.body}
        key={post.id}/>
        ))
    }
  </div>
)
}

export default PostsList;