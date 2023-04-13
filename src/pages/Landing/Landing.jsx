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
          <div className={styles.contentLinks}>
            <a href="sell">사고 팔기</a>
            <a href="#">룸메 구하기</a>
            <a href="#">#3</a>
            <a href="#">#4</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
