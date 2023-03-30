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
        <input required type="text" name="title" onChange={handleChange} />
        <label htmlFor="content">Content</label>
        <textarea
          name="content"
          onChange={handleChange}
          cols="30"
          rows="10"
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default NewPost;
