import React from "react";
import "./Mainsite.css";
import Header from "../Header/Header";
import Button from "../Button/Button";
import protein from "./icons/protein.png";
import fat from "./icons/fat.png";
import carbohydrates from "./icons/carbohydrates.png";
import { Link } from "react-router-dom";

export default MainSite;
function MainSite() {
  return (
    <div>
      <MainSiteMacro />
      <MainSiteCalc />
      <MainSiteContact />
    </div>
  );
}
function MainSiteMacro() {
  return (
    <div className="macro-section">
      <div className="header-wrapper">
        <Header text="Znajdź najlepsze źródła białka, tłuszczu i węglowodanów" />
      </div>
      <div className="tiles-row">
        <Link to="/protein">
          <Tile title="Białko" image={protein} />
        </Link>
        <Link to="/fat">
          <Tile title="Tłuszcz" image={fat} />
        </Link>
        <Link to="/carbohydrates">
          <Tile title="Węglowodany" image={carbohydrates} />
        </Link>
      </div>
    </div>
  );
}

function Tile({ image, title }) {
  return (
    <div className="tile">
      <img src={image} />
      <p>{title}</p>
    </div>
  );
}

function MainSiteCalc() {
  return (
    <div className="main-container">
      <WhiteHeader text="Nie wiesz jakie makro jest dla Ciebie odpowiednie?" />
      <Link to="/calculator">
        <WhiteButton text="Skorzystaj z kalkulatora" />
      </Link>
    </div>
  );
}

function WhiteHeader({ text }) {
  return <h1 className="white-header">{text}</h1>;
}

function WhiteButton({ text }) {
  return <button className="white-button">{text}</button>;
}
function MainSiteContact() {
  return (
    <div className="main-container-contact">
      <div className="header-wrapper">
        <Header text="Potrzebujesz pomocy? Napisz do mnie." />
      </div>
      <Link to="/contact">
        <Button text="Kontakt" />
      </Link>
    </div>
  );
}
