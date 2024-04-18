// ffc --> seda pigem ei kasuta
// rfce

import React from 'react'
import Yldist from '../components/Yldist'
import GarantiiAeg from '../components/GarantiiAeg'
import GarantiiTeostamine from '../components/GarantiiTeostamine'
import GarantiiEiKuulu from '../components/GarantiiEiKuulu'
import Tarbija from '../components/Tarbija'
import Defekt from '../components/Defekt'

function Ariklient() {
  return (
    <div>
      Garantii tingimused
GARANTII TINGIMUSED:
Salvesta .pdf kujul siit
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