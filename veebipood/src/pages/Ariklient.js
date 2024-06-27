// ffc --> seda pigem ei kasuta
// rfce

import React from 'react'
import Yldist from '../components/Yldist'
import GarantiiAeg from '../components/GarantiiAeg'
import GarantiiTeostamine from '../components/GarantiiTeostamine'
import GarantiiEiKuulu from '../components/GarantiiEiKuulu'
import Tarbija from '../components/Tarbija'
import Defekt from '../components/Defekt'
// import { gsap } from "gsap";// GSAP
// import { ScrollToPlugin } from "gsap/ScrollToPlugin"; // GSAP
// import { ScrollSmoother } from 'gsap'

function Ariklient() {
  // gsap.registerPlugin(ScrollToPlugin);

  // ScrollSmoother.create({
  //   smooth: 1, // how long (in seconds) it takes to "catch up" to the native scroll position
  //   effects: true, // looks for data-speed and data-lag attributes on elements
  //   smoothTouch: 0.1, // much shorter smoothing time on touch devices (default is NO smoothing on touch devices)
  // });


  return (
    <div>
      Garantii tingimused
GARANTII TINGIMUSED:
Salvesta .pdf kujul siit
{/* <button onClick={() => ScrollSmoother.scrollTo("#4p")}>4.peatükk</button> */}
<br />
<Yldist />
<GarantiiAeg />
<GarantiiTeostamine />
<GarantiiEiKuulu />
<Tarbija />
<Defekt />
NB! Arvutitark OÜ ei kohustu tagasi ostma või ümber vahetama töökorras tooteid, mille klient on ostnud kauplusest kohapealt. Konkreetse toote tagastamise või vahetamise võimaluse ja tingimused otsustab garantiiosakond.
<br />
Juhul kui garantiiremonti toodud seadmel ei leita valmistamisprotsessist või kasutatud materjalidest põhjustatud viga, võidakse töö tellijalt nõuda remonditellimuse käsitlustasu kuni €36.-. Esimese kuue kuu jooksul tarbijale tasu ei rakendata.
    </div>
  )
}

export default Ariklient

// Võiks välja failist 100% tõsta kui on üle 200 rea
// Võiks mõelda välja tõstmise peale kui on üle 150 rea