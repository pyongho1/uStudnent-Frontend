import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

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
    <>
      <p>Post Details</p>
      <img src={post.author.photo} alt="" />
      <h6>{post.author.name}</h6>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
    </>
  ) : (
    <p>Loading...</p>
  );
};

export default PostDetail;
