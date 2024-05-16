import React, { useEffect, useState } from 'react'

function Supplier() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(body => setProducts(body))
  }, []);

  return (
    <div>
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
            </tr>
    )}
        </tbody>
      </table>
    </div>
  )
}

export default Supplier