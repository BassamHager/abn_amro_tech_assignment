import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="container navbar-container__flex">
        {/* main title */}
        <header>
          <Link to="/">
            <h2>
              <i className="fas fa-video" />
              {" ABN"}
            </h2>
            <h4>TV-Show Service</h4>
          </Link>
        </header>

        {/* nav items */}
        <nav>
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/about" className="nav-link">
            about
          </Link>
          <button className="nav-link">Settings</button>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
