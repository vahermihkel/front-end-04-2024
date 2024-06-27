import { useCallback, useContext, useEffect, useMemo, useState } from 'react'
// import productsFromCart from "../../data/cart.json";
import styles from "../../css/Cart.module.css"; 
import ParcelMachines from '../../components/cart/ParcelMachines';
import Payment from '../../components/cart/Payment';
import { CartSumContext } from '../../store/CartSumContext';
import { useDispatch } from 'react-redux';
import { incrementByAmount } from '../../store/counterSlice';
import { decrement, decrementByAmount, increment, zero } from '../../store/cartTotalSlice';
// import { Product } from '../../models/Product';
import { CartProduct } from '../../models/CartProduct';
import { Product } from '../../models/Product';

function Cart() {
  // const key = process.env.REACT_APP_KEY || "";
  const cartLS: CartProduct[] = useMemo(() => JSON.parse(localStorage.getItem("cart") || "[]"), []);
  const [cart, setCart] = useState<CartProduct[]>([]);
  // const [message, setMessage] = useState("Your cart is empty");
  const { setCartSum } = useContext(CartSumContext);
  const dispatch = useDispatch(); // kui dispatch toimub, siis reduxi muutuja muutub
  const url = process.env.REACT_APP_PRODUCTS_DB_URL;
  // const [products, setProducts] = useState<Product[]>([]);

  const findCartProductsWithDbProducts = useCallback((json: Product[]) => {
    const cartWithOriginalProducts: CartProduct[] = cartLS.map((cartProduct) => 
      ({
          kogus: cartProduct.kogus, 
          toode: json.find(p => p.id === cartProduct.toode.id)
        })
      ).filter((cp): cp is CartProduct => cp.toode !== undefined);
    setCart(cartWithOriginalProducts);
  }, [cartLS])

  useEffect(() => {
    if (url === undefined) {
      return;
    }
    fetch(url)
      .then(res => res.json())
      .then((json: Product[]) => {
        findCartProductsWithDbProducts(json);
      });
  }, [url, findCartProductsWithDbProducts]);

  const empty = () => {
    dispatch(zero());

    cart.splice(0);
    setCart(cart.slice()); // muudab HTMLi
    localStorage.setItem("cart", JSON.stringify(cart)); // salvestab
    setCartSum(cartSum()); // muudab NavigationBaris kogusummat
  }

  const decreaseQuantity = (product: CartProduct) => {
    dispatch(decrement());

    product.kogus--;
    if (product.kogus <= 0) {
      // järjekorranumbri leidmiseks:
      // findIndex -> leiab mingi omaduse alusel
      // indexOf -> kui on teada terve toode
      const index = cart.indexOf(product);
      cart.splice(index, 1);  
    }
    // product.kogus = product.kogus - 1;   -- on selle lühendatud variant
    setCart(cart.slice()); // muudab HTMLi
    localStorage.setItem("cart", JSON.stringify(cart)); // salvestab
    setCartSum(cartSum());
  }

  const increaseQuantity = (product: CartProduct) => {
    dispatch(increment());

    product.kogus++;
    setCart(cart.slice());
    localStorage.setItem("cart", JSON.stringify(cart));
    setCartSum(cartSum());
  }
 
  const removeFromCart = (jrknr: number) => {
    dispatch(incrementByAmount(cart[jrknr].kogus));
    dispatch(decrementByAmount(cart[jrknr].kogus));

    cart.splice(jrknr, 1);  
    setCart(cart.slice()); 
    localStorage.setItem("cart", JSON.stringify(cart));
    setCartSum(cartSum());
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