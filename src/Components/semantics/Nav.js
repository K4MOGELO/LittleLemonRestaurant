import { useState } from "react";
import { useLocation, Link } from "react-router-dom";

import logoImage from "./logo.png";
import "./NavbarStyle.css";

const Header = () => {
  const { pathname } = useLocation();
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <header>
      <nav className="container grid nav-bar">
        <Link className="nav-bar-logo" to="/">
          <img src={logoImage} alt="Little Lemon logo" />
        </Link>
        <button
          className="nav-bar-hamburger"
          type="button"
          onClick={() => setIsNavExpanded(!isNavExpanded)}
        >
          {isNavExpanded ? <h1>X</h1> : <h1>=</h1>}
        </button>
        <ul
          className={isNavExpanded ? "nav-bar-links expanded" : "nav-bar-links"}
          onClick={() => setIsNavExpanded(!isNavExpanded)}
        >
          <li>
            <Link className={pathname === "/" ? "current-location" : ""} to="/">
              HOME
            </Link>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/">Menu</Link>
          </li>
          <li>
            <Link to="/booking">RESERVATIONS</Link>
          </li>
          <li>
            <Link to="/">OrderOnline</Link>
          </li>
          <li>
            <Link to="/">Login</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
