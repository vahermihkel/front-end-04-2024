import React, { useState } from "react";
import productsFromFile from "./../../data/products.json";
// import cart from "./../../data/cart.json";
import { Link } from "react-router-dom";
 
function HomePage() {
  const [products, setProducts] = useState(productsFromFile);
 
  function addToCart(product) {
    const cartLS = JSON.parse(localStorage.getItem("cart")) || [];
    // const index = cartLS.findIndex();
    const found = cartLS.find(cp => cp.toode.id === product.id);
    if (found !== undefined) { // index >= 0,   index !== -1
      // suurendame kogust
      found.kogus = found.kogus + 1;
      //found.kogus += 1; // liida iseendale 1
      //found.kogus++; // suurenda iseendale täpselt 1 võrra
      // cartLS[index].kogus++;
      // cartLS[index].kogus += 1;
      // cartLS[index].kogus = cartLS[index].kogus + 1;
    } else {
      cartLS.push({"kogus": 1, "toode": product});
    }
    localStorage.setItem("cart", JSON.stringify(cartLS));
  }
 
  // 1. võtame localStoragest          localStorage.getItem() || []
  // 2. võtame jutumärgid maha         JSON.parse()
  // 3. lisame võetule juurde          .push()
  // 4. paneme jutumärgid tagasi       JSON.stringify()
  // 5. paneme localStoragesse tagasi  localStorage.setItem()
 
  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <img style={{ width: "100px" }} src={product.image} alt="" />
          <div>{product.title}</div>
          <div>{product.price.toFixed(2)} €</div>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
          {/* <Link to={`/product/${product.title}`}> */}
          <Link to={"/product/" + product.title.replaceAll(" ", "-").replaceAll(",", "").toLowerCase()}>
            <button>View Details</button>
          </Link>
        </div>
      ))}
    </div>
  );
}
 
export default HomePage;