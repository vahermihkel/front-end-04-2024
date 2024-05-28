import { Link } from "react-router-dom";
import styles from "../../css/HomePage.module.css";
import Button from "@mui/material/Button";

        // lühendatud props-st --> object destructuring
function Product({product}) {

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
    <div className={styles.product} key={product.id}>
      <img style={{ width: "100px" }} src={product.image} alt="" />
      <div>{product.title.length > 50 ? product.title.substring(0,50) + " ..." : product.title}</div>
      <div>{product.price.toFixed(2)} €</div>
      <Button variant="contained" onClick={() => addToCart(product)}>Add to Cart</Button>
      {/* <Link to={`/product/${product.title}`}> */}
      <Link to={"/product/" + product.title.replaceAll(" ", "-").replaceAll(",", "").toLowerCase()}>
        <Button variant="outlined">View Details</Button>
      </Link>
    </div>
  )
}

export default Product