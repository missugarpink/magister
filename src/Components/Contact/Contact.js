import React from "react";
import "./Contact.css";

export default Contact;

function Contact() {
  return (
    <div className="contact-container">
      <h1 className="contact-h1">Kontakt</h1>
      <h2>Potrzebujesz pomocy? Skontaktuj się ze mną!</h2>
      <p>
        Chętnie pomogę Ci jeśli potrzebujesz dodatkowych porad.<br></br> Napisz
        do mnie na instagramie.<br></br>
        <a href="https://www.instagram.com/missugar.pink/" target="_blank">
          missugar.pink
        </a>
      </p>
    </div>
  );
}
