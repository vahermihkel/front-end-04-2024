import React from 'react'
import { Link } from 'react-router-dom'

function Ostukorv() {
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