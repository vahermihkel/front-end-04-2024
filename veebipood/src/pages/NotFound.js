import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div>
      (Pilt)
      404 - Lehekülge ei leitud
      <Link to="/">
        <button>Mine avalehele</button>
      </Link>
    </div>
  )
}

export default NotFound