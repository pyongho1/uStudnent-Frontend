// Styles
import styles from "./Landing.module.css";

// Bootstrap
// import Table from "react-bootstrap/Table";

// Components
import PostList from "../../components/PostList/PostList";

const Landing = ({ user, posts }) => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.contentContainer}>
          <h1>hello, {user ? user.name : "friend"}</h1>
        </div>
      </div>
    </>
  );
};

export default Landing;
