// Components
import PostList from "../../components/PostList/PostList";

const BuySell = ({ posts, user }) => {
  return (
    <>
    {posts.map((post, index) => (
      <PostList key={post.title} post={post} index={index} user={user} />
      // <Table striped>
      //   <thead>
      //     <tr>
      //       <th>#</th>
      //       <th>Author</th>
      //       <th>Title</th>
      //       <th>Date Posted</th>
      //     </tr>
      //   </thead>
      //   <tbody>
      //     <tr>
      //       <td>{index + 1}</td>
      //       <td>{post.author.name}</td>
      //       <td>{post.title}</td>
      //       <td>{post.createdAt}</td>
      //     </tr>
      //   </tbody>
      // </Table>
    ))}
    </>
  );
};

export default BuySell;
