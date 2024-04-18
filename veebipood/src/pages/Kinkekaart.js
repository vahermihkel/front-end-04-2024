import React, { useState } from 'react'

function Kinkekaart() {
  const [kogus, muudaKogus] = useState(1);

  return (
    <div>
      <button disabled={kogus === 1} onClick={() => muudaKogus(kogus - 1)}>-</button>
      <span>{kogus}</span>
      <button onClick={() => muudaKogus(kogus + 1)}>+</button>
    </div>
  )
}

export default Kinkekaart