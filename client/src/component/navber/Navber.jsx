import { Link } from "react-router-dom";
import "./navber.css";
import { useAuth } from "../../context/AuthProbider";

export default function Navber() {
  const { authState, logOut } = useAuth();

  return (
    <nav className="nav-container">
      <div className="nav-section">
        <div className="nav-icon">
          <Link>Booking.com</Link>
        </div>
        <ul>
          <li className="signin">
            <Link>List Your Property</Link>
          </li>
          {!authState.currentUser ? (
            <li className="signin">
              <Link to={"/singin"}>Sign In</Link>
            </li>
          ) : (
            <li className="signin" onClick={logOut}>
              <Link to={"/"}>Sing Out</Link>
            </li>
          )}
          {!authState.currentUser && (
            <li className="register">
              <Link to={"/register"}>Register</Link>
            </li>
          )}
          <li className="signin">
            <Link to={`/profile/${authState?.currentUser?._id}`}>Profile</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
