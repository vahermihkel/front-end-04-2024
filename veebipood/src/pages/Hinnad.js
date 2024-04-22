import React, { useState } from 'react'

function Hinnad() {
  const [hinnad, muudaHinnad] = useState([31, 5, 123, 52, 8, 321, 12, 9, 41]);

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
      <button onClick={() => muudaHinnad([])}>Kustuta kõik</button>
      <button onClick={sorteeriKasvavalt}>Sorteeri kasvavalt</button>
      <button onClick={sorteeriZA}>Sorteeri Z-A</button>
      <button onClick={filtreeriSuuremadKui50}>Jäta alles suuremad kui 50</button>

      <div>{hinnad.length} tk</div>
      <br />
      {hinnad.map(hind => <div>{hind} €</div>)}
    </div>
  )
}

export default Hinnad