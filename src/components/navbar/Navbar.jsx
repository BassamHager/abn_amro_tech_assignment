import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isOpenSideBar, setIsOpenSideBar] = useState(false);

  // lightness theme control
  useEffect(() => {
    document.body.style.backgroundColor = isDarkMode ? "#004943" : "#009286";
    // footer todo
  }, [isDarkMode, isOpenSideBar]);

  return (
    <div className="navbar__container container__sticky">
      <div className="container container__flex">
        {/* icon & main title */}
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
          <aside
            // onBlur={() => setIsOpenSideBar(false)}
            className={`${isOpenSideBar && "showSideBar"}`}
          >
            {/* home */}
            <NavLink
              exact
              to="/"
              activeClassName="active"
              className="nav__link"
            >
              Home
            </NavLink>

            {/* about */}
            <NavLink
              exact
              to="/about"
              activeClassName="active"
              className="nav__link"
            >
              About
            </NavLink>

            {/* settings - drop down menu */}
            <div className="nav__link dropdown">
              <button className="btn__drop">
                <i className="fas fa-cog"></i>
              </button>

              {/* dropped menu */}
              <div
                className="dropdown-content"
                onClick={() => setIsDarkMode(!isDarkMode)}
              >
                <i className="fas fa-adjust"></i>
              </div>
            </div>
          </aside>

          {/* sidebar */}
          {/* sidebar open button */}
          <button
            className="btn__open"
            onClick={() => setIsOpenSideBar(!isOpenSideBar)}
          >
            {isOpenSideBar ? (
              <i class="fas fa-window-close"></i>
            ) : (
              <i className="fas fa-bars"></i>
            )}
          </button>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
