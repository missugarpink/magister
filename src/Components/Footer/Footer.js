import React from "react";
import "./Footer.css";

export default Footer;
function Footer() {
  return (
    <div className="footer">
      <div className="footer-logo">Macrosources</div>
      <ul>
        <li>Kontakt</li>
        <li>O nas</li>
      </ul>
      <div className="footer-rights">© Macrosources 2024</div>
    </div>
  );
}
