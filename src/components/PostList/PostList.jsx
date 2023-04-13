// Styles
import styles from "./PostList.module.css";

// Bootstrap
import Table from "react-bootstrap/Table";

import { Link } from "react-router-dom";

const PostList = ({ post, index, user }) => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.indexBox}>
          <p>{index + 1}</p>
        </div>
        <div className={styles.profileBox}>
          <img src={post.author.photo} alt="" />
          <p>{post.author.name}</p>
        </div>
        <div className={styles.titleBox}>
          <a href={`posts/${post._id}`}>
            {post.title.length > 30
              ? post.title.substring(0, 30) + "..."
              : post.title}
          </a>
        </div>
        <div className={styles.datebox}>
          <p>{post.createdAt.substring(0, 10)}</p>
        </div>
      </div>
    </>
  );
};

export default PostList;
