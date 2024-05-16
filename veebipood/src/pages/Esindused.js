import React, { useState } from 'react'

function Esindused() {
  // let linn = "Tallinn"; tavaline JavaScript teeb nii (ei uuenda HTMLi)
  const [linn, muudaLinn] = useState("Tallinn"); // React teeb nii, tema vahetab olekuid
  const [keskused] = useState(["Ülemiste", "Rocca al Mare", "Magistrali", "Vesse", "Kristiine", "Järveotsa"]);

  // Keskuste koguarv

  // 1. Sorteeri A-Z
  // 2. Sorteeri Z-A
  // 3. Sorteeri tähtede arv kasvavalt
  // 4. Sorteeri tähtede arv kahanevalt
  // 5. Sorteeri kolmas täht A-Z

  // 1. Filtreeri kellel on täpselt 9 tähte
  // 2. Filtreeri kellel on vähemalt 7 tähte
  // 3. Filtreeri kellel on lühend "is"
  // 4. Filtreeri kellel on kolmas täht "i"
  // 5. Filtreeri kes lõppeb "e" tähega

//   const filtreeri9Tahelised = () => {
//     const vastus = TalesindusedFailist.filter(t => t.keskus.length === 9);
//     const vastus2 = keskused2.filter(t => t.length === 9);
//     const vastus3 = keskused3.filter(t => t.length === 9);
//     const vastus4 = keskused4.filter(t => t.length === 9);
//     muudaKeskused(vastus);
//     muudaKeskused2(vastus2);
//     muudaKeskused3(vastus3);
//     muudaKeskused4(vastus4);
// }

//   const filtreeriVahemalt7 = () => {
//     const vastus = TalesindusedFailist.filter(t => t.keskus.length >= 7);
//     const vastus2 = keskused2.filter(t => t.length >= 7);
//     const vastus3 = keskused3.filter(t => t.length >= 7);
//     const vastus4 = keskused4.filter(t => t.length >= 7);
//     muudaKeskused(vastus);
//     muudaKeskused2(vastus2);
//     muudaKeskused3(vastus3);
//     muudaKeskused4(vastus4);
// }

//   const filtreeriISSisaldav = () => {
//     const vastus = keskused.filter(t => t.keskus.includes("is"));
//     const vastus2 = keskused2.filter(t => t.includes("is"));
//     const vastus3 = keskused3.filter(t => t.includes("is"));
//     const vastus4 = keskused4.filter(t => t.includes("is"));
//     muudaKeskused(vastus);
//     muudaKeskused2(vastus2);
//     muudaKeskused3(vastus3);
//     muudaKeskused4(vastus4);
// }

//   const filtreeriITaht3 = () => {
//     const vastus = keskused.filter(name => name.keskus.charAt(2) === 'i');
//     const vastus2 = keskused2.filter(name => name.charAt(2) === 'i');
//     const vastus3 = keskused3.filter(name => name.charAt(2) === 'i');
//     const vastus4 = keskused4.filter(name => name.charAt(2) === 'i');
//     muudaKeskused(vastus);
//     muudaKeskused2(vastus2);
//     muudaKeskused3(vastus3);
//     muudaKeskused4(vastus4);
// }

//   const filtreeriETahegaLop = () => {
//     const vastus = keskused.filter(t => t.keskus.endsWith("e"));
//     const vastus2 = keskused2.filter(t => t.endsWith("e"));
//     const vastus3 = keskused3.filter(t => t.endsWith("e"));
//     const vastus4 = keskused4.filter(t => t.endsWith("e"));
//     muudaKeskused(vastus);
//     muudaKeskused2(vastus2);
//     muudaKeskused3(vastus3);
//     muudaKeskused4(vastus4);
// }

  // HALDAESINDUSED failis
  // 1. Tühjenda
  // 2. Võimalda teda ajutiselt kustutada
  // 3. Võimalda teda lõppu juurde lisada

  return (
    <div>
      <div>Aktiivne linn: {linn}</div>

      <button className={linn === "Tallinn" ? "linn-aktiivne" : "linn"} onClick={() => muudaLinn("Tallinn")}>Tallinn</button>
      <button className={linn === "Tartu" ? "linn-aktiivne" : "linn"} onClick={() => muudaLinn("Tartu")}>Tartu</button>
      <button className={linn === "Narva" ? "linn-aktiivne" : "linn"} onClick={() => muudaLinn("Narva")}>Narva</button>
      <button className={linn === "Pärnu" ? "linn-aktiivne" : "linn"} onClick={() => muudaLinn("Pärnu")}>Pärnu</button>

      {linn === "Tallinn" && 
        <div>
          <button>Sort A-Z</button>
         {keskused.map(keskus => <div key={keskus}>{keskus}</div>)}
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