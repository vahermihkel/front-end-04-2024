import React, { useState } from 'react'
import Test from '../components/Test';

function Avaleht() {
  const [kogus, muudaKogus] = useState(0); // kokku liita, jagada, suurem/väiksem
  const [sonum, muudaSonum] = useState("Muuda kogust!"); // vt esimest tähte, viimast tähte, kas sisaldab
  const [laigitud, muudaLaigitud] = useState(false); // booleanil saan keerata tagurpidi

  function nulli() {
    muudaKogus(0);
    muudaSonum("Nullisid koguse!");
  }

  function vähenda() {
    muudaKogus(kogus - 1);
    muudaSonum("Vähendasid kogust!");
  }

  function suurenda() {
    muudaKogus(kogus + 1);
    muudaSonum("Suurendasid kogust!");
  }

  return (
    <div>
      <Test />
      {laigitud === false && <img src="/mittelaigitud.svg" alt="" />}
      {laigitud === true && <img src="/laigitud.svg" alt="" />}
      <button onClick={() => muudaLaigitud(!laigitud)}>Muuda like'i</button>
      <div>{sonum}</div>
      {kogus !== 0 && <button onClick={nulli}>Tagasi nulli</button>}
      <button disabled={kogus === 0} onClick={vähenda}>-</button>
      <span>{kogus}</span>
      <button onClick={suurenda}>+</button>
    </div>
  )
}

export default Avaleht