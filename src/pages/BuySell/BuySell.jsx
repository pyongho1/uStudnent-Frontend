// Styles
import styles from "./BuySell.module.css";

// Components
import PostList from "../../components/PostList/PostList";

const BuySell = ({ posts, user }) => {
  return (
    <div className={styles.container}>
      <h2>사고팔고</h2>
      {posts.map((post, index) => (
        <PostList key={post.title} post={post} index={index} user={user} />
      ))}
    </div>
  );
};

export default BuySell;
