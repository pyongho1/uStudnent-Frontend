import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

import * as postService from "../../services/postService";

const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      const data = await postService.show(id);
      setPost(data);
    };
    fetchPost();
  }, [id]);

  return post ? (
    <>
      <p>Post Details</p>
      <p>{post.content}</p>
    </>
  ) : (
    <p>Loading...</p>
  );
};

export default PostDetail;
