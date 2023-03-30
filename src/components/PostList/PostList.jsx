// Styles
import styles from "./PostList.module.css";

// Bootstrap
import Table from 'react-bootstrap/Table';

const PostList = ({ post, user }) => {
  return (
    <div className={styles.container}>
      <div className={styles.colContainer}>
        <h4>{post.title}</h4>
        {/* <p>{post.content}</p> */}
        <div className={styles.infoBox}>
          <p>{post.author.name}</p>
          <p>{post.createdAt}</p>
        </div>
        <Table striped>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
      </div>
    </div>
  );
};

export default PostList;
