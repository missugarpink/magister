import React from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default Navbar;
function Navbar() {
  return (
    <div className="navbar">
      <Link to="/">
        <div className="logo">Macrosources</div>
      </Link>
      <ul>
        <li>
          <SearchMenu />
        </li>
        <li>
          <Link to="/protein">Białko</Link>
        </li>
        <li>
          <Link to="/fat">Tłuszcz</Link>
        </li>
        <li>
          <Link to="/carbohydrates">Węglowodany</Link>
        </li>
        <li>Kalkulator</li>
      </ul>
    </div>
  );
}

function SearchMenu() {
  return <FontAwesomeIcon icon={faSearch} />;
}
