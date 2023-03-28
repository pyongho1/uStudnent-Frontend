import styles from "./Landing.module.css";

const Landing = ({ user }) => {
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
