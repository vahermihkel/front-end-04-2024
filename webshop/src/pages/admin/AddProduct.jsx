import React, { useEffect, useRef, useState } from 'react'
// import productsFromFile from "../../data/products.json";

function AddProduct() {
  const idRef = useRef();
  const titleRef = useRef();
  const priceRef = useRef();
  const imageRef = useRef();
  const categoryRef = useRef();
  const descriptionRef = useRef();
  // const ratingRef = useRef();
  const url = process.env.REACT_APP_PRODUCTS_DB_URL;
  const [products, setProducts] = useState([]);

  const [categories, setCategories] = useState([]);
  const categoriesUrl = process.env.REACT_APP_CATEGORIES_DB_URL;

  useEffect(() => {
    fetch(categoriesUrl)
      .then(res => res.json())
      .then(json => {
        setCategories(json)
      })
  }, [categoriesUrl]);

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(json => setProducts(json || []));
  }, [url]);

  const addProduct = () => {
    const newProduct = {
      "id": Number(idRef.current.value),
      "title": titleRef.current.value, 
      "price": Number(priceRef.current.value), 
      "category": categoryRef.current.value, 
      "image": imageRef.current.value,
      "rating": {
        "rate": 0,
        "count": 0
      },
      "active": true,
      "description": descriptionRef.current.value,
    };
    products.push(newProduct);
    fetch(url, {"method": "PUT", "body": JSON.stringify(products)});
 
    idRef.current.value = "";
    titleRef.current.value = "";
    priceRef.current.value = "";
    imageRef.current.value = "";
    categoryRef.current.value = "";
    // ratingRef.current.value = "";
    descriptionRef.current.value = "";
  }

  // ID unikaalsuse kontroll

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
      {/* <input ref={categoryRef} type="text" /><br />
      <label>Product rating</label><br />
      <input ref={ratingRef} type="number" /><br />
      <input 
        ref={ratingRef} 
        type="number" 
        min="0" 
        max="5"  
      /><br /> */}
      <select ref={categoryRef}>
        {categories.map(category => <option key={category.name}>{category.name}</option>)}
      </select> <br />
      <label>Product description</label><br />
      <input ref={descriptionRef} type="text" /><br />
      <button onClick={addProduct}>Add</button><br />
    </div>
  )
}

export default AddProduct