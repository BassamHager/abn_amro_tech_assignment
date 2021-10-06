import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar__container container__sticky">
      <div className="container container__flex">
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
          <Link to="/" className="nav__link">
            Home
          </Link>
          <Link to="/about" className="nav__link">
            about
          </Link>
          <button className="nav__link">Settings</button>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
