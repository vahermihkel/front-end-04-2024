import React, { useRef, useState } from 'react'
import tootedFailist from "../data/tooted.json"
import { useNavigate, useParams } from 'react-router-dom'

function MuudaToode() {
  const { index } = useParams();
        //["Saab", "Volvo", "BMW"][0]
  const toode = tootedFailist[index];
  const nimiRef = useRef();
  const hindRef = useRef();
  const piltRef = useRef();
  const aktiivsusRef = useRef();

  const navigate = useNavigate();
  const [sonum, muudaSonum] = useState("");

  // Reacti hookid. Reacti erikood: tehakse midagi teisiti kui tavaline JavaScript
  // Reeglid:
  // 1. Peab algama use eesliidesega
  // 2. Peab olema imporditud
  // 3. Peab olema sulud lõpus
  // 4. Ei tohi olla funktsiooni sees loodud
  // 5. Ei tohi olla tingimuslikult loodud

  const muuda = () => {
    // cars[0] = "Opel";
    if (nimiRef.current.value === "") {
      muudaSonum("Toote nimetus ei saa olla tühi!")
      return;
    }

    const uusToode = {
      "nimi": nimiRef.current.value, 
      "hind": Number(hindRef.current.value), 
      "aktiivne": aktiivsusRef.current.checked, 
      "pilt": piltRef.current.value
    };
    tootedFailist[index] = uusToode;
    navigate("/halda-tooted");
  }

  // Nupul peaks olema kas:
  // onClick={}
  // <Link to=""> 

  // Mitte mõlemad korraga, sest enne võiks koodilõik valmis saada 
  //  ja seejärel suunamine toimuda

  if (toode === undefined) { // early return
    return <div>Toodet ei leitud!</div>
  }

  return (
    <div>
      <div>{sonum}</div>
      {/* <div>{toode}</div> */}
      <label htmlFor='nimi'>Toode nimi</label> <br />
      <input id='nimi' ref={nimiRef} type="text" defaultValue={toode.nimi} /> <br />
  
      <label>Toote hind</label> <br />
      <input ref={hindRef} type="number" defaultValue={toode.hind} /> <br />

      <label>Toote pilt</label> <br />
      <input ref={piltRef} type="text" defaultValue={toode.pilt} /> <br />

      <label>Toote aktiivsus</label> <br />
      <input ref={aktiivsusRef} type="checkbox" defaultChecked={toode.aktiivne} /> <br />

      <button onClick={muuda}>Muuda</button> <br />
    </div>
  )
}

export default MuudaToode