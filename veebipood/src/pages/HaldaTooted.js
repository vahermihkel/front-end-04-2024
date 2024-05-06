import React, { useRef, useState } from 'react'
import tootedFailist from "../data/tooted.json";
import { Link } from 'react-router-dom';

function HaldaTooted() {
  const [tooted, muudaTooted] = useState(tootedFailist.slice());
  const nimiRef = useRef();
  const hindRef = useRef();
  const piltRef = useRef();
  const aktiivsusRef = useRef();

  const kustuta = (index) => {
    tootedFailist.splice(index, 1);
    muudaTooted(tootedFailist.splice());
  }

  // const lisa = (toode) => {
  //   tootedFailist.push(toode);
  //   muudaTooted(tootedFailist.slice());
  // }

  const lisaToode = () => {
    // kui muudan HTMLs inputi tüüpi:   <input type="number" />   <input type="checkbox" />
    // siis pean muutma ka kuidas ma Refi seest väärtust küsin

    const uusToode = {
      "nimi": nimiRef.current.value, 
      "hind": Number(hindRef.current.value), 
      "aktiivne": aktiivsusRef.current.checked, 
      "pilt": piltRef.current.value
    };
    tootedFailist.push(uusToode);
    muudaTooted(tootedFailist.slice());

    nimiRef.current.value = "";
    hindRef.current.value = "";
    piltRef.current.value = "";
    aktiivsusRef.current.checked = false;
  }

  const kokku = () => {
    let summa = 0;
    tooted.forEach(t => summa = summa + t.hind);
    return summa;
  }

  return (
    <div>
      <label>Toote nimi</label> <br />
      <input ref={nimiRef} type="text" /> <br />
      <label>Toote hind</label> <br />
      <input ref={hindRef} type="number" /> <br />
      <label>Toote pilt</label> <br />
      <input ref={piltRef} type="text" /> <br />
      <label>Toote aktiivsus</label> <br />
      <input ref={aktiivsusRef} type="checkbox" /> <br />
      <button onClick={lisaToode}>Lisa</button> <br />

      <div>Toodete hinnad kokku: {kokku()} €</div>

      <table>
        <thead>
          <tr>
            <th>Pilt</th>
            {/* <th>Pildi URL</th> */}
            <th>Nimi</th>
            <th>Hind</th>
            <th>Aktiivne</th>
            <th>Tegevused</th>
          </tr>
        </thead>
        <tbody>
          {tooted.map((toode, index) => 
            <tr key={index}>
              <td><img className="pilt" src={toode.pilt} alt="" /></td>
              {/* <td>{toode.pilt}</td> */}
              <td>{toode.nimi}</td>
              <td>{toode.hind}</td>
              <td>{toode.aktiivne ? <span>Aktiivne</span>: <span>Mitteaktiivne</span>}</td>
              <td>
                <button onClick={() => kustuta(index)}>x</button>
                {/* <button onClick={() => lisa(toode)}>Lisa lõppu juurde</button> */}
                <Link to={"/muuda-toode/" + index}>
                  <button>Muuda</button>
                </Link>
              </td>
            </tr>
          )}
        </tbody>
      </table>
      

    </div>
  )
}

export default HaldaTooted