import React, { useRef, useState } from 'react'

// KODUS: Toote faili lisamine

function LisaToode() {
  const [sonum, muudaSonum] = useState("Lisa uus toode!");
  const luger = useRef(); // inputi lugemiseks. nameRef
  // const [buttonDisabled, setButtonDisabled] = useState(false);
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

  const kontrolli = () => {
    if (luger.current.value === "") {
      muudaSonum("Viga: Toodet ei saa olla tühja nimetusega");
      // setButtonDisabled(true);
      return;
    }
    if (luger.current.value[0].toLowerCase() === luger.current.value[0]) {
      muudaSonum("Viga: Toode ei alga suure tähega");
      // setButtonDisabled(true);
      return;
    }
    if (luger.current.value.includes("/") === true) {
      muudaSonum("Viga: Toote nimes ei saa olla kaldkriipsu");
      // setButtonDisabled(true);
      return;
    }
    muudaSonum("");
    // setButtonDisabled(false);
  }

  return (
    <div>
      <div>{sonum}</div>
      <label>Toote nimi</label> <br />
      <input onChange={kontrolli} ref={luger} type="text" /> <br />
      <button disabled={sonum.startsWith("Viga:")} onClick={lisa}>Sisesta</button>
      {/* <button disabled={buttonDisabled === true} onClick={lisa}>Sisesta</button> */}
    </div>
  )
}

export default LisaToode