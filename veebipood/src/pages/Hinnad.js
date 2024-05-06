import React, { useState } from 'react'
import hinnadJSON from "../data/hinnad.json";
import { Link } from 'react-router-dom';

function Hinnad() {
  const [hinnad, muudaHinnad] = useState(hinnadJSON.slice());

  const originaali = () => {
    muudaHinnad(hinnadJSON.slice());
  }

  const sorteeriKasvavalt = () => {
    hinnad.sort((a,b) => a.nr - b.nr);
    muudaHinnad(hinnad.slice());
  }

  const sorteeriZA = () => {
    // hinnad.sort((a,b) => 31.toString().localeCompare(20));
    // hinnad.sort((a,b) => {nr: 31, lisaja: "Mihkel"}.toString().localeCompare({nr: 20, lisaja: "Mihkel"}));
    hinnad.sort((a,b) => b.nr.toString().localeCompare(a.nr));
    muudaHinnad(hinnad.slice());
  }

  const filtreeriSuuremadKui50 = () => {
    // const vastus = hinnad.filter(hind => {nr: 31, lisaja: "Mihkel"} > 50);
    const vastus = hinnad.filter(hind => hind.nr > 50);
    muudaHinnad(vastus);
  }

  const kokku = () => {
    let summa = 0;
    // hinnad.forEach(h => summa = summa + {nr: 31, lisaja: "Mihkel"});
    hinnad.forEach(h => summa = summa + h.nr);
    return summa;
  }

  return (
    <div>
      <div>Hinnad kokku: {kokku()}</div>
      <button onClick={originaali}>Originaali</button>
      <button onClick={() => muudaHinnad([])}>Kustuta kõik</button>
      <button onClick={sorteeriKasvavalt}>Sorteeri kasvavalt</button>
      <button onClick={sorteeriZA}>Sorteeri Z-A</button>
      <button onClick={filtreeriSuuremadKui50}>Jäta alles suuremad kui 50</button>

      <div>{hinnad.length} tk</div>
      <br />
      {hinnad.map((hind, index) => 
      <div key={index}>
        {/* {{"nr": 31, "lisaja": "Mihkel"}} € */}
        {hind.nr} €
        <Link to={"/hind/" + hind.nr}>Vaata lähemalt</Link>
        {/* <Link to={"/hind/" + index}>Vaata lähemalt</Link> */}
      </div>)}
    </div>
  )
}

export default Hinnad