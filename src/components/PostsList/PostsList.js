import Post from '../Post/Post';
import styles from './PostsList.module.scss';

function PostsList ({deleteOne, posts, users, allPosts}) {
return (
  <div className={styles.container}>
    {posts.map(post => (
      <Post
        user={users.find(user => user.id === post.userId)}
        title={post.title}
        body={post.body}
        allPosts={posts}
        post={post}
        deleteOne={deleteOne}
        key={post.id}/>
        ))
    }
  </div>
)
}

export default PostsList;