import React from "react";
import { useState } from "react";
import ostukorvJSON from "../data/ostukorv.json";
import tootedFailist from "../data/tooted.json";
import { Link } from "react-router-dom";

function Tooted() {
  const [tooted, muudaTooted] = useState(tootedFailist.slice());

  const sorteeriAZ = () => {
    tooted.sort((a, b) => a.nimi.localeCompare(b.nimi));
    muudaTooted(tooted.slice());
  };

  const sorteeriZA = () => {
    tooted.sort((a, b) => b.nimi.localeCompare(a.nimi));
    muudaTooted(tooted.slice());
  };

  const sorteeriTahemargidVaiksemast = () => {
    tooted.sort((a, b) => a.nimi.length - b.nimi.length);
    muudaTooted(tooted.slice());
  };

  const sorteeriTahemargidKah = () => {
    tooted.sort((a, b) => b.nimi.length - a.nimi.length);
    muudaTooted(tooted.slice());
  };

  const sorteeriKolmasTähtAZ = () => {
    tooted.sort((a, b) => a.nimi[2].localeCompare(b.nimi[2]));
    muudaTooted(tooted.slice());
  };

  // KOJU: Hinna järgi järjekorda ühtepidi ja teistpidi

  const lisaOstukorvi = (toode) => {
    ostukorvJSON.push(toode);
    alert("Edukalt lisatud: " + toode.nimi);
    // ei muuda HTMLi (ei muuda tooteid), kui lisame ostukorvi
  }

  const reset = () => {
    muudaTooted(tootedFailist.slice());
  }

  const filtreeriAktiivsed = () => {
    const vastus = tootedFailist.filter(t => t.aktiivne === true);
    muudaTooted(vastus);
  }

  const filtreeriOdavad = () => {
    const vastus = tootedFailist.filter(t => t.hind < 40000);
    muudaTooted(vastus);
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
      <button onClick={reset}>Reset</button>
      <button onClick={filtreeriAktiivsed}>Jäta alles aktiivsed</button>
      <button onClick={filtreeriOdavad}>Jäta alles odavamad kui 40 000</button>
      <br />
      <div>
        <span className="vastusText">Töödete koguarv:</span> {tooted.length}{" "}
        <span className="vastusText">tk</span>
        <br />
        <br />
        {tooted.map((t, index) => (
          <div key={index}>
            <img className="pilt" src={t.pilt} alt="" />
            <div>{t.nimi}</div>
            <div>{t.hind} €</div>
            <button disabled={t.aktiivne === false} onClick={() => lisaOstukorvi(t)}>Lisa ostukorvi</button>
            <Link to={"/toode/" + t.nimi}>
              Vaata lähemalt
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tooted;
