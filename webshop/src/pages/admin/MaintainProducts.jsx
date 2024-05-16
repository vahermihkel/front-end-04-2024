import React, { useRef } from 'react'
import productsFromFile from "../../data/products.json";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import "../../css/MaintainProducts.css";
 
function MaintainProducts() {
  const [products, setProducts] = useState(productsFromFile.slice());
  const searchRef = useRef();
 
  const deleteProduct = (product) => {
    const index = productsFromFile.indexOf(product);
    productsFromFile.splice(index, 1);
    // setProducts(productsFromFile.slice());
    searchFromProducts();
  } 

  const searchFromProducts = () => {
    const result = productsFromFile.filter(product => 
      product.title.toLowerCase().includes(searchRef.current.value.toLowerCase()) ||
      product.description.toLowerCase().includes(searchRef.current.value.toLowerCase())
    );
    setProducts(result);
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
             <tr key={index}> 
             <td><img style={{width: "100px"}} src={product.image} alt="" /></td>
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