import React from 'react'
import { useParams } from 'react-router-dom'
import hinnadFailist from "../data/hinnad.json"
import NotFound from './NotFound';

function YksHind() {
  //const {index} = useParams();   kui URLs järjekorranumber
  //const hind = hinnadFailist[index];

  //const {summa} = useParams(); 1. lähenemisviis - object destructuring
  //const hind = hinnadFailist.find(h => h === summa);
  
  const params = useParams(); // 2. lähenemisviis - võtan objekti, hiljem võtan võtme alusel
  //console.log(JSON.stringify(params));
  // {"summa":"12", "kategooria": "hind", ...}
  const hind = hinnadFailist.find(h => h.nr === Number(params.summa));

  if (hind === undefined) {
    return <NotFound />
  }

  return (
    <div>
      <div>Hind: {hind.nr} €</div>
      <div>Lisaja: {hind.lisaja}</div>
    </div>
  )
}

export default YksHind