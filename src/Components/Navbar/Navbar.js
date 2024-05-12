import React from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default Navbar;
function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">Macrosources</div>
      <ul>
        <li>
          <SearchMenu />
        </li>
        <li>Białko</li>
        <li>Tłuszcz</li>
        <li>Węglowodany</li>
        <li>Kalkulator</li>
      </ul>
    </div>
  );
}

function SearchMenu() {
  return <FontAwesomeIcon icon={faSearch} />;
}
