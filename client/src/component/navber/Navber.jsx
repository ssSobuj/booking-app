import { Link } from "react-router-dom";
import "./navber.css";

export default function Navber() {
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
          <li className="signin">
            <Link to={"/singin"}>Sign In</Link>
          </li>
          <li className="register">
            <Link to={"/register"}>Register</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
