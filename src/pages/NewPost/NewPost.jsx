// Styles
import styles from "./NewPost.module.css";

import { useState } from "react";

const NewPost = ({ handleAddPost, posts }) => {
  const [form, setForm] = useState({
    title: "",
    content: "",
  });

  const handleChange = ({ target }) => {
    setForm({ ...form, [target.name]: target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddPost(form);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input required type="text" name="title" placeholder="제목" onChange={handleChange} />
        <label className={styles.contentLabel} htmlFor="content">Content</label>
        <textarea
          name="content"
          placeholder="내용"
          onChange={handleChange}
          cols="30"
          rows="10"
        ></textarea>
        <button type="submit" className={styles.createBtn}>Submit</button>
      </form>
    </>
  );
};

export default NewPost;
