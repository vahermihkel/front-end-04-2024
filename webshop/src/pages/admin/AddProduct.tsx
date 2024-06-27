import React, { useEffect, useRef, useState } from 'react'
import { Category } from '../../models/Category';
import { Product } from '../../models/Product';
// import productsFromFile from "../../data/products.json";

function AddProduct() {
  const idRef = useRef<HTMLInputElement>(null);
  const titleRef = useRef<HTMLInputElement>(null);
  const priceRef = useRef<HTMLInputElement>(null);
  const imageRef = useRef<HTMLInputElement>(null);
  const categoryRef = useRef<HTMLSelectElement>(null);
  const descriptionRef = useRef<HTMLInputElement>(null);
  // const ratingRef = useRef();
  const url = process.env.REACT_APP_PRODUCTS_DB_URL;
  const [products, setProducts] = useState<Product[]>([]);

  const [categories, setCategories] = useState<Category[]>([]);
  const categoriesUrl = process.env.REACT_APP_CATEGORIES_DB_URL;

  useEffect(() => {
    if (categoriesUrl === undefined) {
      return;
    }
    fetch(categoriesUrl)
      .then(res => res.json())
      .then(json => {
        setCategories(json)
      })
  }, [categoriesUrl]);

  useEffect(() => {
    if (url === undefined) {
      return;
    }
    fetch(url)
      .then(res => res.json())
      .then(json => setProducts(json || []));
  }, [url]);

  const addProduct = () => {
    if (
      idRef.current === null || titleRef.current === null || 
      priceRef.current === null || categoryRef.current === null || 
      imageRef.current === null || descriptionRef.current === null
    ) {
      return;
    }

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
    if (url === undefined) {
      return;
    }
    fetch(url, {"method": "PUT", "body": JSON.stringify(products)});
 
    idRef.current.value = "";
    titleRef.current.value = "";
    priceRef.current.value = "";
    imageRef.current.value = "";
    categoryRef.current.value = "";
    // ratingRef.current.value = "";
    descriptionRef.current.value = "";
  }

  const [idUnique, setIdUnique] = useState(true);
  // ID unikaalsuse kontroll
  const checkIdUniqueness = () => {
    const idInput = idRef.current;
    if (idInput === null) {
      return;
    }

    const result = products.find((p) => p.id === Number(idInput.value));
    setIdUnique(result === undefined);
  };

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