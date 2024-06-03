import React, { useEffect, useRef } from 'react'
// import productsFromFile from "../../data/products.json";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from "../../css/MaintainProducts.module.css";
import { Spinner } from 'react-bootstrap';
 
// let isLoading = true;

function MaintainProducts() {
  const [products, setProducts] = useState([]);
  const searchRef = useRef();
  const [dbProducts, setDbProducts] = useState([]);
  const url = process.env.REACT_APP_PRODUCTS_DB_URL;
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(json => {
        setProducts(json);
        setDbProducts(json);
        setLoading(false);
        // isLoading = false;
      })
  }, [url]);
 
  const deleteProduct = (product) => {
    const index = dbProducts.indexOf(product);
    dbProducts.splice(index, 1);
    // setProducts(productsFromFile.slice());
    fetch(url, {"method": "PUT", "body": JSON.stringify(dbProducts)});
    searchFromProducts();
  } 

  const searchFromProducts = () => {
    const result = dbProducts.filter(product => 
      product.title.toLowerCase().includes(searchRef.current.value.toLowerCase()) ||
      product.description.toLowerCase().includes(searchRef.current.value.toLowerCase())
    );
    setProducts(result);
  }

  if (isLoading) {
    return <Spinner />
  }
 
  return (
    <div>
      <input onChange={searchFromProducts} ref={searchRef} type="text" />
      <span>{products.length}</span>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Title</th>
            <th>Price</th>
            <th>Category</th>
            <th>Rating</th>
            <th>Rate count</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => 
          // KOJU:
             <tr key={index} className={product.active ? styles.active : styles.inactive}> 
             <td><img className={styles.picture} src={product.image} alt="" /></td>
             <td>{product.title}</td> 
             <td>{product.price}</td> 
             <td>{product.category}</td>
             <td>{product.rating.rate}</td>
             <td>{product.rating.count}</td>
             <td>{product.description}</td>
             <td>
              <button onClick={() => deleteProduct(product)}>x</button>
              <Link to={"/admin/edit-product/" + product.id}>
                <button>Edit</button>
              </Link>
              </td>
 
            </tr>
    )}
        </tbody>
      </table>
 
    </div>
  )
}
 
export default MaintainProducts