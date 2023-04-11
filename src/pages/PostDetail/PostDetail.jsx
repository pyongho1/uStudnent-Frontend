import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

// Styles
import styles from "./PostDetail.module.css";

import * as postService from "../../services/postService";

const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      const data = await postService.show(id);
      // console.log(data);
      setPost(data);
    };
    fetchPost();
  }, [id]);

  return post ? (
    <div className={styles.container}>
      <div className={styles.profileCard}>
        <img src={post.author.photo} alt="" />
        <h6>{post.author.name}</h6>
      </div>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
    </div>
  ) : (
    <p>Loading...</p>
  );
};

export default PostDetail;
