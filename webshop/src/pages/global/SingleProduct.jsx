import React from 'react'
import { useParams } from 'react-router-dom'
import productsFromFile from "../../data/products.json";
 
// Coca-cola 2L
// Coca-cola-2L
// Coca cola 2L

function SingleProduct() {
    const {title} = useParams();
    const product = productsFromFile.find(t => 
      t.title.replaceAll(" ", "-").replaceAll(",", "").toLowerCase() === title
    );
 
    if (product === undefined) {
      return <div>Product not found</div>
    }
 
  return (
    <div>
        <img style={{width: "100px"}} src={product.image} alt="" />
        <div>Product title: {product.title}</div>
        <div>Price: {product.price} €</div>
        <div>Rating: {product.rating.rate} €</div>
        <div>Category: {product.category} €</div>
        <div>Description: {product.description}</div>
    </div>
  )
}
 
export default SingleProduct