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

      <Link to="/seaded">
        <button className="nupp">Seaded</button>
      </Link>

      <Link to="/tooted">
        <button className="nupp">Tooted</button>
      </Link>

      <Link to="/hinnad">
        <button className="nupp">Hinnad</button>
      </Link>

      <Link to="/tootajad">
        <button className="nupp">Töötajad</button>
      </Link>

      <br /><br />

      <Link to="/lisa-toode">
        <button className="nupp">Lisa toode</button>
      </Link>

      <Link to="/halda-esindused">
        <button className="nupp">Halda esindusi</button>
      </Link>

      <Link to="/halda-hinnad">
        <button className="nupp">Halda hindu</button>
      </Link>

      <Link to="/halda-tootajad">
        <button className="nupp">Halda töötajaid</button>
      </Link>

      <Link to="/halda-tooted">
        <button className="nupp">Halda tooteid</button>
      </Link>

      <Link to="/shops">
        <button className="nupp">Shops</button>
      </Link>

      <Link to="/contact">
        <button className="nupp">Contact Us</button>
      </Link>
    </div>
  )
}

export default Menyy