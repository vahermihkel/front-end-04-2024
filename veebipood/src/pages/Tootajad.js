import React, { useState } from 'react'

function Tootajad() {
  const [tootajad, muudaTootajad] = useState(["Urmet","Kaido","Liina","Maiki","Heidi","Epp","Kaire","Anet","Maarja"]);

  const reset = () => {
    muudaTootajad(["Urmet","Kaido","Liina","Maiki","Heidi","Epp","Kaire","Anet","Maarja"]);
  }

  const sorteeriAZ = () => {
    // tootajad.sort();
    tootajad.sort((a,b) => a.localeCompare(b));
    muudaTootajad(tootajad.slice());
    // muudaTootajad([...tootajad]); mälukoha ära kustutamine, 
    //                muidu uuendab iseennast iseenda kaudu
  }

  const sorteeriZA = () => {
    // 1. a: "Urmet"  b: "Kaido"
    // 2. a: "Kaido"  b: "Liina"
    // 3. a: "Liina"  b: "Maiki"
    // tootajad.sort((a,b) => a < b ? 1 : -1);
    tootajad.sort((a,b) => b.localeCompare(a));
    // kui on pos. number, siis vahetab asukoha, kui on neg. number siis jätab samaks
    muudaTootajad(tootajad.slice());
  }

  const sorteeriTahemargidVaiksemast = () => {
    // 1. a: "Urmet"  b: "Epp"    5  -  3   --> pos. arv, vahetab asukohta
    // 2. a: "Epp"  b: "Anet"    3 - 4      --> neg. arv, ei vaheta asukohta
    // 3. a: "Anet"  b: "Maiki"  4  - 5     --> neg. arv, ei vaheta asukohta
    tootajad.sort((a,b) => a.length - b.length);
    muudaTootajad(tootajad.slice());
  }

  const sorteeriTahedKah = () => {
    tootajad.sort((a,b) => b.length - a.length);
    //tootajad.reverse(); --> siis kui on a ja b õigetpidi
    muudaTootajad(tootajad.slice());
  }

  // const sorteeriKolmasTahtAZ = () => {
  //   tootajad.sort((a,b) => a[2].localeCompare(b[2]));
  //   muudaTootajad(tootajad.slice());
  // }

  const filtreeriVaiksemKui5 = () => {
    // ["Coca", "Fanta", "Sprite"].filter();
    // .filter("Coca" => "Coca".length < 5)

    // TSÜKKEL, mis käib 3x
    // .filter("Coca" => 4 < 5) TRUE ehk jätame alles
    // .filter("Fanta" => 5 < 5) FALSE
    // .filter("Sprite" => 6 < 5) FALSE
                                    //  sõna pikkus
    const vastus = tootajad.filter(t => t.length < 5);
    muudaTootajad(vastus);
  }

  const filtreeriKTahegaAlgavad = () => {
                                      // sõna algab
    const vastus = tootajad.filter(t => t.startsWith("K"));
    muudaTootajad(vastus);
  }

  // Sorteeri
  // 1. Nupp kolmas täht A-Z
  // 2. Teine täht A-Z

  // Filtreeri
  // 1. Täpselt 3 tähelised
  // 2. Rohkem kui 5 tähelised
  // 3. "ai" lühendit sisaldavad
  // 4. Kellel on kolmas täht "i"
  // 5. 'M' tähega algavad
  // 6. Huvitav: Paarisarv tähti

  // HALDA FAILIS
  // Lisage üks lõppu juurde
  // Kustutage

  const kokku = () => {
    // const --> ei luba võrdusmärgiga teda muuda
    // let -> lubab muutujat otse võrdusmärgiga muuta
    let summa = 0;
    // summa = summa + 5;
    // summa = summa + 5;
    // summa = summa + 4;
    // summa = summa + 3;
    // summa = summa + 6;
    //["Kaido", "Epp", "Maarja"].forEach()
    // forEach("Kaido" =>  5  = 0 + 5  )
    // forEach("Epp" =>    8  = 5 + 3  )
    // forEach("Maarja" => 14 = 8 + 6  )
    tootajad.forEach(t => summa = summa + t.length);
    return summa;
  }

  // Kui teeme funktsiooni onClickiga:
  // onClick={lisa}    VÕI     onClick{() => lisa()}

  // Kui teeme funktsiooni väljakutse mitte onClickiga
  // <div> {lisa()} </div>

  return (
    <div>
      <div>Tähemärgid kokku: {kokku()}</div>
      <button onClick={reset}>Originaalid tagasi</button>

      <button onClick={sorteeriAZ}>Sorteeri A-Z</button>
      <button onClick={sorteeriZA}>Sorteeri Z-A</button>
      <button onClick={sorteeriTahemargidVaiksemast}>Sorteeri tähed kasvavalt</button>
      <button onClick={sorteeriTahedKah}>Sorteeri tähed kahanevalt</button>
      <button onClick={filtreeriVaiksemKui5}>Jäta alles kellel on nime pikkus väiksem kui 5</button>
      <button onClick={filtreeriKTahegaAlgavad}>Jäta alles kes algavad K'ga</button>
                              {/* array pikkus */}
      <div>Töötajate koguarv: {tootajad.length} tk</div>
      {tootajad.map(t => <div>{t}</div>)}
      {/* <div>Urmet</div>
      <div>Kaido</div>
      <div>Liina</div>
      <div>Maiki</div>
      <div>Heidi</div>
      <div>Epp</div>
      <div>Kaire</div>
      <div>Anet</div>
      <div>Maarja</div> */}
    </div>
  )
}

export default Tootajad