// Styles
import styles from "./PostList.module.css";

// Bootstrap
import Table from "react-bootstrap/Table";

const PostList = ({ post, index, user }) => {
  return (
    <div className={styles.container}>
      {/* <h4>{post.title}</h4>
        <p>{post.content}</p>
        <div className={styles.infoBox}>
        <p>{post.author.name}</p>
        <p>{post.createdAt}</p>
      </div> */}
      <Table striped>
        {/* <thead>
            <tr>
            <th>#</th>
            <th>Author</th>
            <th>Title</th>
            <th>Date Posted</th>
            </tr>
          </thead> */}
        <tbody>
          <tr>
            <td>{index + 1}</td>
            <td>{post.author.name}</td>
            <td>{post.title}</td>
            <td>{post.createdAt.substring(0, 10)}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default PostList;
