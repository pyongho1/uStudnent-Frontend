const Testing = ({ posts }) => {
  return (
    <>
      {posts.map((post) => (
        <p>{post.title}</p>
      ))}
    </>
  );
};

export default Testing;
