import React, { useEffect, useState } from 'react'
// import productsFromCart from "../../data/cart.json";
 
function Cart() {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || []);
  // const [message, setMessage] = useState("Your cart is empty");
  const [parcelmachines, setParcelmachines] = useState([]);

  // uef
  useEffect(() => {
    fetch('https://www.omniva.ee/locations.json')
      .then(response => response.json())
      .then(json => setParcelmachines(json))
  }, []);

  const empty = () => {
    cart.splice(0);
    setCart(cart.slice()); // muudab HTMLi
    localStorage.setItem("cart", JSON.stringify(cart)); // salvestab
  }

  const decreaseQuantity = (product) => {
    product.kogus--;
    if (product.kogus === 0) {
      // järjekorranumbri leidmiseks:
      // findIndex -> leiab mingi omaduse alusel
      // indexOf -> kui on teada terve toode
      const index = cart.indexOf(product);
      cart.splice(index, 1);  
    }
    // product.kogus = product.kogus - 1;   -- on selle lühendatud variant
    setCart(cart.slice()); // muudab HTMLi
    localStorage.setItem("cart", JSON.stringify(cart)); // salvestab
  }

  const increaseQuantity = (product) => {
    product.kogus++;
    setCart(cart.slice());
    localStorage.setItem("cart", JSON.stringify(cart));
  }
 
  const removeFromCart = (jrknr) => {
    cart.splice(jrknr, 1);  
    setCart(cart.slice()); 
    localStorage.setItem("cart", JSON.stringify(cart));
  }
  
  // const addToEnd = (product) => {
  //   cart.push(product);
  //   setCart(cart.slice()); 
  //   localStorage.setItem("cart", JSON.stringify(cart));
  // }
  
  const cartSum = () => {
    let total = 0;
    cart.forEach(t => total = total + t.toode.price * t.kogus);
    return total.toFixed(2); // konverteerime sõnaks
  }
 
  return (
    <div>
      <button onClick={empty}>Empty the cart</button>
      {cart.length > 0 ? (
        cart.map((product, index) =>
          <div key={index}>
            <img style={{ width: "100px" }} src={product.toode.image} alt="" /> 
            <div>{product.toode.title}</div>
            <div>{product.toode.price.toFixed(2)}</div>
            <button onClick={() => decreaseQuantity(product)}>-</button>
            <div>{product.kogus}</div>
            <button onClick={() => increaseQuantity(product)}>+</button>
            <div>{(product.toode.price * product.kogus).toFixed(2)}</div>
            <button onClick={() => removeFromCart(index)}>x</button>
            {/* <button onClick={() => addToEnd(product)}>Add to the end</button> */}
          </div>
        )
      ) : (
        <div>Your cart is empty</div>
      )}

      <span>Number of items in the cart: </span> 
      {cart.length} 
      <span> pcs</span>
      <br />
      <div>Price total: {cartSum()} €</div>
      <select>
      {parcelmachines
        .filter(pm => pm.A0_NAME === "EE")
        .map(pm => <option>{pm.NAME}</option>)}
      </select>
    </div>
  );
}
 
export default Cart