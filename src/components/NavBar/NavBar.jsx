import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = ({ user, handleLogout }) => {
  return (
    <nav>
      {user ? (
        <>
          {/* <p className="userName">Welcome, {user.name}</p> */}

          <Link to="/" className="navLists">
            홈
          </Link>

          <Link to="/sell" className="navLists">
            사고팔고
          </Link>

          <Link to="/sell" className="navLists">
            룸메찾아유
          </Link>

          <Link to="/new" className="navLists">
            Create
          </Link>

          <Link to="" className="navLists" onClick={handleLogout}>
            LOG OUT
          </Link>

          {/* <li>
            <Link to="/change-password">Change Password</Link>
          </li> */}
        </>
      ) : (
        <>
          <Link to="/login" className="navLists">
            Log In
          </Link>

          <Link to="/signup" className="navLists">
            Sign Up
          </Link>
        </>
      )}
    </nav>
  );
};

export default NavBar;
