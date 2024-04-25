import React from "react";
import { useState } from "react";
import ostukorvJSON from "../data/ostukorv.json";
import tootedFailist from "../data/tooted.json";

function Tooted() {
  const [tooted, muudaTooted] = useState(tootedFailist.slice());

  const sorteeriAZ = () => {
    tooted.sort((a, b) => a.localeCompare(b));
    muudaTooted(tooted.slice());
  };

  const sorteeriZA = () => {
    tooted.sort((a, b) => b.localeCompare(a));
    muudaTooted(tooted.slice());
  };

  const sorteeriTahemargidVaiksemast = () => {
    tooted.sort((a, b) => a.length - b.length);
    muudaTooted(tooted.slice());
  };

  const sorteeriTahemargidKah = () => {
    tooted.sort((a, b) => b.length - a.length);
    muudaTooted(tooted.slice());
  };

  const sorteeriKolmasTähtAZ = () => {
    tooted.sort((a, b) => a[2].localeCompare(b[2]));
    muudaTooted(tooted.slice());
  };

  const lisaOstukorvi = (toode) => {
    ostukorvJSON.push(toode);
    alert("Edukalt lisatud: " + toode);
    // ei muuda HTMLi (ei muuda tooteid), kui lisame ostukorvi
  }

  return (
    <div>
      <br />
      <button className="nuppFilter" onClick={sorteeriAZ}>
        Sorteeri A-Z
      </button>
      <button className="nuppFilter" onClick={sorteeriZA}>
        Sorteeri Z-A
      </button>
      <button className="nuppFilter" onClick={sorteeriTahemargidVaiksemast}>
        Sorteeri tähemärgid kasvavalt
      </button>
      <button className="nuppFilter" onClick={sorteeriTahemargidKah}>
        Sorteeri tähemärgid kahanevalt
      </button>
      <button className="nuppFilter" onClick={sorteeriKolmasTähtAZ}>
        Sorteeri kolmandast tähest A-Z
      </button>
      <br />
      <br />
      <div>
        <span className="vastusText">Töödete koguarv:</span> {tooted.length}{" "}
        <span className="vastusText">tk</span>
        <br />
        <br />
        {tooted.map((t) => (
          <div>
            {t}
            <button onClick={() => lisaOstukorvi(t)}>Lisa ostukorvi</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tooted;
