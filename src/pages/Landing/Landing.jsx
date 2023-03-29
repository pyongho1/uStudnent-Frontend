import styles from "./Landing.module.css";

const Landing = ({ user, posts }) => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.contentContainer}>
          <h1>hello, {user ? user.name : "friend"}</h1>
          {posts.map((post) => (
            <p key={post.title}>{post.title}</p>
          ))}
        </div>
      </div>
    </>
  );
};

export default Landing;
