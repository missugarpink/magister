import React from "react";
import "./Pal.css";
import Header from "../Header/Header";
export default Pal;
function Pal() {
  return (
    <div className="pal-container">
      <Header text="Współczynnik PAL" />
      <h2>Przeczytaj, jeśli masz problem z dobraniem współczynnika PAL.</h2>
      <p>Współczynnik aktywności fizycznej PAL ma 5 poziomów:</p>
      <p>
        <b>1.2:</b> oznacza całkowity brak aktywności fizycznej; dotyczy to osób
        chorych, które leżą w łóżku,
      </p>
      <p>
        <b>1.4:</b> określa osoby, które mają lekką aktywność na co dzień; będą
        to np. zakupy, sprzątanie, wynoszenie śmieci, spacer z psem czy inne
        obowiązki domowe, a ich praca jest siedząca - to najbardziej popularny
        poziom aktywności większości osób (jeżeli nie masz celowej aktywności
        dziennej od 30 minut, również zaliczasz się do tej grupy);
      </p>
      <p>
        <b>1.6:</b> ten współczynnik dotyczy osób o średniej aktywności
        fizycznej - do standardowych obowiązków domowych dochodzą codzienne
        spacery (lub przemieszczanie się piechotą), regularne treningi i nieco
        większa aktywność w pracy (np. jako nauczyciel, pracownik sklepu),
      </p>
      <p>
        <b>1.8:</b> to już wysoka aktywność fizyczna, czyli wszystko co powyżej
        z dodatkowymi spacerami, regularnymi treningami (4+ w tygodniu) oraz
        spędzaniem większości swojego dnia w aktywny sposób (praca fizyczna,
        praca w ruchu - kelner, sprzątacz itp.)
      </p>
      <p>
        <b>2.0:</b> ten współczynnik stosuje się u zawodowych sportowców i osób
        mających ciężką pracę fizyczną, jak np. osoby intensywnie pracujące na
        budowie, w fabryce, stolarni, kopalni, jako dostawca na rowerze i tym
        podobne, a dodatkowo trenujące jakiś sport
        <a href="https://formazycia.pl/pl/n/41" target="_blank">
          (Źródło)
        </a>
        .
      </p>
    </div>
  );
}
