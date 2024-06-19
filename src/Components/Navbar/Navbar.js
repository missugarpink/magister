import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar">
      <Link to="/" className="logo">
        Macrosources
      </Link>
      <div className={`hamburger ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li>
          <Link to="/protein" onClick={toggleMenu}>
            Białko
          </Link>
        </li>
        <li>
          <Link to="/fat" onClick={toggleMenu}>
            Tłuszcz
          </Link>
        </li>
        <li>
          <Link to="/carbohydrates" onClick={toggleMenu}>
            Węglowodany
          </Link>
        </li>
        <li>
          <Link to="/calculator" onClick={toggleMenu}>
            Kalkulator
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
