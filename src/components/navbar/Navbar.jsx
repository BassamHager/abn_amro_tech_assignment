import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar__container">
      <header>
        <h1>ABN</h1>
        <h2>TV-Show Service</h2>
      </header>
      <nav>
        <a href="#" className="nav-link">
          Home
        </a>
        <a href="#" className="nav-link">
          about
        </a>
        <a href="#" className="nav-link">
          settings
        </a>
      </nav>
    </div>
  );
};

export default Navbar;
