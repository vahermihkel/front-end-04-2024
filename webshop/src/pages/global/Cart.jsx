import React, { useState } from 'react'
// import productsFromCart from "../../data/cart.json";
import styles from "../../css/Cart.module.css"; 
import ParcelMachines from '../../components/cart/ParcelMachines';
import Payment from '../../components/cart/Payment';

function Cart() {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || []);
  // const [message, setMessage] = useState("Your cart is empty");
  

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

  const productsSum = () => {
    let total = 0;
    cart.forEach(t => total = total + t.kogus);
    return total; 
  }

  

  // Kui HTMLs vahetame URLi: <Link to="">
  // Kui Reacti JavaScriptis vahetame URLi const navigate = useNavigate()    navigate("")
  // Kui tahame URLile liikuda mis on väljaspool meie rakendust     window.location.href = "http://err.ee"
 
  return (
    <div>
      <button onClick={empty}>Empty the cart</button>
      {cart.length > 0 ? (
        cart.map((product, index) =>
          <div className={styles.product} key={index}>
            <img className={styles.image} src={product.toode.image} alt="" /> 
            <div className={styles.title}>{product.toode.title}</div>
            <div className={styles.price}>{product.toode.price.toFixed(2)}</div>
            {/* <button onClick={() => decreaseQuantity(product)}>-</button> */}
            <div className={styles.quantity}>
              <img className={styles.button} onClick={() => decreaseQuantity(product)} src="/minus.png" alt="" />
              <div>{product.kogus} tk</div>
              {/* <button onClick={() => increaseQuantity(product)}>+</button> */}
              <img className={styles.button} onClick={() => increaseQuantity(product)} src="/plus.png" alt="" />
            </div>
            <div className={styles.sum}>{(product.toode.price * product.kogus).toFixed(2)}</div>
            {/* <button onClick={() => removeFromCart(index)}>x</button> */}
            <img className={styles.button} onClick={() => removeFromCart(index)} src="/remove.png" alt="" />
            {/* <button onClick={() => addToEnd(product)}>Add to the end</button> */}
          </div>
        )
      ) : (
        <div>Your cart is empty</div>
      )}

      {cart.length > 0 &&
        // <span className={styles.cart__bottom}>
        // <span className={styles.cartBottom}>
        // <span className={styles['cart-bottom']}>
        <span className={styles.cartBottom}>
          <span>Number of different items in the cart: </span> 
          {cart.length} 
          <span> pcs</span>
          <br />
          <div>Products total: {productsSum()} €</div>
          <div>Price total: {cartSum()} pcs</div>
          <Payment sum={cartSum()} />
          <ParcelMachines />
        </span>}
    </div>
  );
}
 
export default Cart