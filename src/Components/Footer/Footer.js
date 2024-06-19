import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
export default Footer;
function Footer() {
  return (
    <div className="footer">
      <div className="footer-logo">Macrosources</div>
      <ul>
        <li>
          <Link to="/contact">Kontakt</Link>
        </li>
        <li>
          <Link to="/pal">PAL</Link>
        </li>
      </ul>
      <div className="footer-rights">© Macrosources 2024</div>
    </div>
  );
}
