import React, { useRef, useState } from 'react'

function LisaToode() {
  const [sonum, muudaSonum] = useState("Lisa uus toode!");
  const luger = useRef(); // inputi lugemiseks. nameRef
  // function lisa() {

  // }

  const lisa = () => {
    if (luger.current.value === "") {
      muudaSonum("Toodet ei saa tühja nimetusega sisestada!")
    } else {
      muudaSonum("Toode lisatud: " + luger.current.value + "!");
      luger.current.value = "";
    }
  }

  return (
    <div>
      <div>{sonum}</div>
      <label>Toote nimi</label> <br />
      <input ref={luger} type="text" /> <br />
      <button onClick={lisa}>Sisesta</button>
    </div>
  )
}

export default LisaToode