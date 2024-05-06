import React from 'react'
import { useParams } from 'react-router-dom'
import tootedFailist from "../data/tooted.json"

function YksToode() {
  //    "Tesla"
  const { nimi } = useParams();
  //const toode = tootedFailist[index]; <-- järjekorranumbriga leidmine
  // kõik muud leidmised (nime järgi, ID järgi, hinna järgi)
  const toode = tootedFailist.find(t => t.nimi === nimi);
  //  ["BMW", "Nobe", "Tesla"].find( => )
  //  1. "BMW" => "BMW" === "Tesla"     false
  //  2. "Nobe" => "Nobe" === "Tesla"   false
  //  3. "Tesla" => "Tesla" === "Tesla"   true   ---> paneb ta muutuja "toode" sisse

  if (toode === undefined) { // early return
      return <div>Toodet ei leitud!</div>
  }

  return (
    <div>
      <div>Toote nimi: {toode.nimi}</div>
      <div>Hind: {toode.hind} €</div>
      <div>Kirjeldus: {toode.aktiivne ? <span>toodet saab osta</span> : <span>toode on otsas</span>}</div>
      <img src={toode.pilt} alt="Toote pilt" />
    </div>
  )
}

export default YksToode