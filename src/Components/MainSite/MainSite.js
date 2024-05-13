import React from "react";
import "./Mainsite.css";
import Header from "../Header/Header";
import Button from "../Button/Button";
import protein from "./icons/protein.png";
import fat from "./icons/fat.png";
import carbohydrates from "./icons/carbohydrates.png";

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
      <Header text="Znajdź najlepsze źródła białka, tłuszczu i węglowodanów" />
      <div className="tiles-row">
        <Tile title="Białko" image={protein} />
        <Tile title="Tłuszcz" image={fat} />
        <Tile title="Węglowodany" image={carbohydrates} />
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
      <WhiteButton text="Skorzystaj z kalkulatora" />
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
      <Header text="Potrzebujesz pomocy? Napisz do nas." />
      <Button text="Kontakt" />
    </div>
  );
}
