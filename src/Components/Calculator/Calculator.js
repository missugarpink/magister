import React, { useState } from "react";
import "./Calculator.css";

export default Calculator;

function Calculator() {
  const [plec, setPlec] = useState("Kobieta");
  const [wiek, setWiek] = useState("");
  const [waga, setWaga] = useState("");
  const [wzrost, setWzrost] = useState("");
  const [aktywnosc, setAktywnosc] = useState("");
  const [wynik, setWynik] = useState(null);

  const obliczCPM = () => {
    if (!wiek || !waga || !wzrost || !aktywnosc) {
      alert("Proszę uzupełnić wszystkie pola.");
      return;
    }

    let bmr = 0;
    if (plec === "Kobieta") {
      bmr = 10 * waga + 6.25 * wzrost - 5 * wiek - 161;
    } else if (plec === "Mężczyzna") {
      bmr = 10 * waga + 6.25 * wzrost - 5 * wiek + 5;
    }

    let factor = 1;
    switch (aktywnosc) {
      case "Brak aktywności":
        factor = 1.2;
        break;
      case "Niska":
        factor = 1.4;
        break;
      case "Średnia":
        factor = 1.6;
        break;
      case "Wysoka":
        factor = 1.8;
        break;
      case "Bardzo wysoka":
        factor = 2;
        break;
      default:
        factor = 1.2;
    }

    const cpm = bmr * factor;
    const bialko = 1.8 * waga;
    const tluszcze = 1 * waga;
    const weglowodany = (cpm - (bialko * 4 + tluszcze * 9)) / 4;

    setWynik({
      cpm: cpm.toFixed(2),
      bialko: bialko.toFixed(2),
      tluszcze: tluszcze.toFixed(2),
      weglowodany: weglowodany.toFixed(2),
    });
  };

  const resetujFormularz = () => {
    setPlec("Kobieta");
    setWiek("");
    setWaga("");
    setWzrost("");
    setAktywnosc("");
    setWynik(null);
  };

  return (
    <div className="calc-container">
      <h1 className="calc-h1">Kalkulator CPM</h1>
      <div className="form-container">
        {!wynik ? (
          <>
            <div className="form-row">
              <div className="form-label">
                <p>Płeć</p>
              </div>
              <div>
                <button
                  className={plec === "Kobieta" ? "active" : ""}
                  onClick={() => setPlec("Kobieta")}
                >
                  Kobieta
                </button>
                <button
                  className={plec === "Mężczyzna" ? "active" : ""}
                  onClick={() => setPlec("Mężczyzna")}
                >
                  Mężczyzna
                </button>
              </div>
            </div>
            <div className="form-row">
              <div className="form-label">
                <p>Wiek</p>
              </div>
              <div>
                <input
                  type="number"
                  id="wiek"
                  value={wiek}
                  onChange={(e) => setWiek(e.target.value)}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-label">
                <p>Waga</p>
              </div>
              <div>
                <input
                  type="number"
                  id="waga"
                  value={waga}
                  onChange={(e) => setWaga(e.target.value)}
                />
                <span className="measures">kg</span>
              </div>
            </div>
            <div className="form-row">
              <div className="form-label">
                <p>Wzrost</p>
              </div>
              <div>
                <input
                  type="number"
                  id="wzrost"
                  value={wzrost}
                  onChange={(e) => setWzrost(e.target.value)}
                />
                <span className="measures">cm</span>
              </div>
            </div>
            <div className="form-row">
              <div className="form-label">
                <p>Aktywność fizyczna</p>
              </div>
              <div>
                <select
                  id="aktywnosc"
                  value={aktywnosc}
                  onChange={(e) => setAktywnosc(e.target.value)}
                >
                  <option value="">Wybierz aktywność</option>
                  <option value="Brak aktywności">
                    Brak aktywności (PAL 1.2)
                  </option>
                  <option value="Niska">Niska aktywność (PAL 1.4)</option>
                  <option value="Średnia">Średnia aktywność (PAL 1.6)</option>
                  <option value="Wysoka">Wysoka aktywność (PAL 1.8)</option>
                  <option value="Bardzo wysoka">
                    Bardzo wysoka aktywność (PAL 2.0)
                  </option>
                </select>
              </div>
            </div>
            <button className="calculate-btn" onClick={obliczCPM}>
              Oblicz
            </button>
          </>
        ) : (
          <div className="results">
            <h2>Twoje CPM wynosi: {wynik.cpm} kcal</h2>
            <p>Proponowany rozkład makroskładników:</p>
            <p>Białko: {wynik.bialko} g</p>
            <p>Tłuszcze: {wynik.tluszcze} g</p>
            <p>Węglowodany: {wynik.weglowodany} g</p>
            <button className="reset-btn" onClick={resetujFormularz}>
              Oblicz ponownie
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
