import React from 'react'
import { Link } from 'react-router-dom'

function Menyy() {
  return (
    <div>
      <Link to="/avaleht">
        <img
          className="pilt"
          src="https://dalton.ee/wp-content/uploads/2019/10/nobercar1.jpg"
          alt=""
        />
      </Link>

      <Link to="/osta-kinkekaart">
        <button className="nupp">Kinkekaart</button>
      </Link>

      <Link to="/esindused">
        <button className="nupp">Esindused</button>
      </Link>

      <Link to="/arikliendile">
        <button className="nupp">Äriklient</button>
      </Link>

      <Link to="/ostukorv">
        <button className="nupp">Ostukorv</button>
      </Link>

      <Link to="/lisa-toode">
        <button className="nupp">Lisa toode</button>
      </Link>

      <Link to="/seaded">
        <button className="nupp">Seaded</button>
      </Link>
    </div>
  )
}

export default Menyy