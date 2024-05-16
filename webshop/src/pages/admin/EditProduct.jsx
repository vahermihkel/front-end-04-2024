import React, { useRef } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import productsFromFile from "../../data/products.json"
import NotFound from '../global/NotFound';

function EditProduct() {
  const {productId} = useParams(); // URLst võetakse ainult sõnu --> "31321321"
  // const leitud = tootedFailist[index];         31321321  === "31321321"
  const found = productsFromFile.find(product => product.id === Number(productId));
  const idRef = useRef();
  const titleRef = useRef();
  const priceRef = useRef();
  const imageRef = useRef();
  const categoryRef = useRef();
  const descriptionRef = useRef();
  const ratingRef = useRef();
  const navigate = useNavigate();

  const editProduct = () => {
    const newProduct = {
      "id": Number(idRef.current.value),
      "title": titleRef.current.value, 
      "price": Number(priceRef.current.value), 
      "category": categoryRef.current.value, 
      "image": imageRef.current.value,
      "rating": Number(ratingRef.current.value),
      "description": descriptionRef.current.value,
    };
    const index = productsFromFile.indexOf(found);
    // productsFromFile.push(newProduct);
    productsFromFile[index] = newProduct;
    navigate("/admin/maintain-products");
  }

  if (found === undefined) {
    return <NotFound />
  }

  return (
    <div>
      <label>Product ID</label><br />
      <input ref={idRef} type="text" defaultValue={found.id} /><br />
      <label>Product image</label><br />
      <input ref={imageRef} type="text" defaultValue={found.image} /><br />
      <label>Product title</label><br />
      <input ref={titleRef} type="text" defaultValue={found.title} /><br />
      <label>Product price</label><br />
      <input ref={priceRef} type="number" defaultValue={found.price} /><br />
      <label>Product category</label><br />
      <input ref={categoryRef} type="text" defaultValue={found.category} /><br />
      <label>Product rating</label><br />
      {/* <input ref={ratingRef} type="number" /><br /> */}
      <input 
        ref={ratingRef} 
        type="number" 
        min="0" 
        max="5"  
        defaultValue={found.rating.rate}
      /><br />
      <label>Product description</label><br />
      <input ref={descriptionRef} type="text" defaultValue={found.description} /><br />
      <button onClick={editProduct}>Edit</button><br />
    </div>
  )
}

export default EditProduct