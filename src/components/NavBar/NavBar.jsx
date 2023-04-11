import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = ({ user, handleLogout }) => {
  return (
    <nav>
      {user ? (
        <>
          {/* <p className="userName">Welcome, {user.name}</p> */}

          <Link to="/sell" className="navLists">
            사고팔고
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
          <li>
            <Link to="/login">Log In</Link>
          </li>
          <li>
            <Link to="/signup">Sign Up</Link>
          </li>
        </>
      )}
    </nav>
  );
};

export default NavBar;
