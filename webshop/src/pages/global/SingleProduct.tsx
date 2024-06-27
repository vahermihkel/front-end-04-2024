import React, { useEffect, useState } from 'react'
import { Spinner } from 'react-bootstrap';
import { useParams } from 'react-router-dom'
import { Product } from '../../models/Product';
// import productsFromFile from "../../data/products.json";
 
// Coca-cola 2L
// Coca-cola-2L
// Coca cola 2L

function SingleProduct() {
    const {title} = useParams();
    const [products, setProducts] = useState<Product[]>([]);
    const [isLoading, setLoading] = useState(true);
    const url = process.env.REACT_APP_PRODUCTS_DB_URL;
    const product = products.find(t => 
      t.title.replaceAll(" ", "-").replaceAll(",", "").toLowerCase() === title
    );

    useEffect(() => {
      if (url === undefined) {
        return;
      }
      fetch(url)
        .then(res => res.json())
        .then(json => {
          setProducts(json || []);
          setLoading(false);
        });
    }, [url]);
  
    if (isLoading) {
      return <Spinner />
    }
 
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
        <div>Rating: {product.rating.rate}</div>

    </div>
  )
}
 
export default SingleProduct