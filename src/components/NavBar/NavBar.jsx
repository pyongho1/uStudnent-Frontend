import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = ({ user, handleLogout }) => {
  return (
    <nav>
      {user ? (
        <>
          <li>Welcome, {user.name}</li>
          <li>
            <Link to="/profiles">Profiles</Link>
          </li>
          <li>
            <Link to="/create">Create</Link>
          </li>
          <li>
            <Link to="" onClick={handleLogout}>
              LOG OUT
            </Link>
          </li>

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
