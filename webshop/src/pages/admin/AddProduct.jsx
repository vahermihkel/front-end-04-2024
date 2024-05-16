import React, { useRef } from 'react'
import productsFromFile from "../../data/products.json";

function AddProduct() {
  const idRef = useRef();
  const titleRef = useRef();
  const priceRef = useRef();
  const imageRef = useRef();
  const categoryRef = useRef();
  const descriptionRef = useRef();
  const ratingRef = useRef();

  const addProduct = () => {
    const newProduct = {
      "id": Number(idRef.current.value),
      "title": titleRef.current.value, 
      "price": Number(priceRef.current.value), 
      "category": categoryRef.current.value, 
      "image": imageRef.current.value,
      "rating": Number(ratingRef.current.value),
      "description": descriptionRef.current.value,
    };
    productsFromFile.push(newProduct);
 
    idRef.current.value = "";
    titleRef.current.value = "";
    priceRef.current.value = "";
    imageRef.current.value = "";
    categoryRef.current.value = "";
    ratingRef.current.value = "";
    descriptionRef.current.value = "";
  }

  return (
    <div>
      <label>Product ID</label><br />
      <input ref={idRef} type="text" /><br />
       <label>Product image</label><br />
      <input ref={imageRef} type="text" /><br />
      <label>Product title</label><br />
      <input ref={titleRef} type="text" /><br />
      <label>Product price</label><br />
      <input ref={priceRef} type="number" /><br />
      <label>Product category</label><br />
      <input ref={categoryRef} type="text" /><br />
      <label>Product rating</label><br />
      {/* <input ref={ratingRef} type="number" /><br /> */}
      <input 
        ref={ratingRef} 
        type="number" 
        min="0" 
        max="5"  
      /><br />
      <label>Product description</label><br />
      <input ref={descriptionRef} type="text" /><br />
      <button onClick={addProduct}>Add</button><br />
    </div>
  )
}

export default AddProduct