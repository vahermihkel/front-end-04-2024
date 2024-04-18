import React, { useState } from 'react'

function Esindused() {
  // let linn = "Tallinn"; tavaline JavaScript teeb nii (ei uuenda HTMLi)
  const [linn, muudaLinn] = useState("Tallinn"); // React teeb nii, tema vahetab olekuid

  return (
    <div>
      <div>Aktiivne linn: {linn}</div>

      <button className={linn === "Tallinn" ? "linn-aktiivne" : "linn"} onClick={() => muudaLinn("Tallinn")}>Tallinn</button>
      <button className={linn === "Tartu" ? "linn-aktiivne" : "linn"} onClick={() => muudaLinn("Tartu")}>Tartu</button>
      <button className={linn === "Narva" ? "linn-aktiivne" : "linn"} onClick={() => muudaLinn("Narva")}>Narva</button>
      <button className={linn === "Pärnu" ? "linn-aktiivne" : "linn"} onClick={() => muudaLinn("Pärnu")}>Pärnu</button>

      {linn === "Tallinn" && 
        <div>
          <div>Ülemiste</div>
          <div>Rocca al Mare</div>
          <div>Magistrali</div>
          <div>Vesse</div>
          <div>Kristiine</div>
          <div>Järveotsa</div>
        </div>}

      {linn === "Tartu" &&
        <div>
          <div>Raatuse</div>
          <div>Lõunakeskus</div>
        </div>}

      {linn === "Narva" && <div>Fama</div>}

      {linn === "Pärnu" && <div>Port Artur 2</div>}
    </div>
  )
}

export default Esindused