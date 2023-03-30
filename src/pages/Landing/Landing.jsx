// Styles
import styles from "./Landing.module.css";

// Bootstrap
import Table from "react-bootstrap/Table";

// Components
import PostList from "../../components/PostList/PostList";

const Landing = ({ user, posts }) => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.contentContainer}>
          <h1>hello, {user ? user.name : "friend"}</h1>
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
        </div>
      </div>
    </>
  );
};

export default Landing;
