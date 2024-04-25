import React, { useState } from 'react'
import hinnadJSON from "../data/hinnad.json";

function Hinnad() {
  const [hinnad, muudaHinnad] = useState(hinnadJSON.slice());

  const originaali = () => {
    muudaHinnad(hinnadJSON.slice());
  }

  const sorteeriKasvavalt = () => {
    hinnad.sort((a,b) => a - b);
    muudaHinnad(hinnad.slice());
  }

  const sorteeriZA = () => {
    hinnad.sort((a,b) => b.toString().localeCompare(a));
    muudaHinnad(hinnad.slice());
  }

  const filtreeriSuuremadKui50 = () => {
    const vastus = hinnad.filter(hind => hind > 50);
    muudaHinnad(vastus);
  }

  return (
    <div>
      <button onClick={originaali}>Originaali</button>
      <button onClick={() => muudaHinnad([])}>Kustuta kõik</button>
      <button onClick={sorteeriKasvavalt}>Sorteeri kasvavalt</button>
      <button onClick={sorteeriZA}>Sorteeri Z-A</button>
      <button onClick={filtreeriSuuremadKui50}>Jäta alles suuremad kui 50</button>

      <div>{hinnad.length} tk</div>
      <br />
      {hinnad.map((hind, index) => 
      <div key={index}>{hind} €</div>)}
    </div>
  )
}

export default Hinnad