import React from 'react'
import { Link } from 'react-router-dom'

function Ostukorv() {
  // ["Coca", "Fanta", "Sprite", "Red bull"]

  // Koguarv
  // Tühjendamise võimekuse nupp
  // Kui ostukorv on tühi, siis alles näitab teksti
  //            "Ostukorv on tühi", muidu ei näita
  return (
    <div>
      Ostukorv on tühi
      <Link to="/avaleht">
        <button>Mine avalehele</button>
      </Link>
    </div>
  )
}

export default Ostukorv