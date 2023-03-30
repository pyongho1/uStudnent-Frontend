// Styles
import styles from "./Landing.module.css";

// Components
import PostList from "../../components/PostList/PostList";

const Landing = ({ user, posts }) => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.contentContainer}>
          <h1>hello, {user ? user.name : "friend"}</h1>
          {posts.map((post) => (
            <PostList key={post.title} post={post} user={user} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Landing;
