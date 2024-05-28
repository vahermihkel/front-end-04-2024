import React, { useEffect, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
// import productsFromFile from "../../data/products.json"
import NotFound from '../global/NotFound';
import { Spinner } from 'react-bootstrap';

function EditProduct() {
  const {productId} = useParams(); // URLst võetakse ainult sõnu --> "31321321"
  // const leitud = tootedFailist[index];         31321321  === "31321321"
  const idRef = useRef();
  const titleRef = useRef();
  const priceRef = useRef();
  const imageRef = useRef();
  const categoryRef = useRef();
  const descriptionRef = useRef();
  const activeRef = useRef();
  const navigate = useNavigate();
  const url = process.env.REACT_APP_PRODUCTS_DB_URL;
  const [products, setProducts] = useState([]);
  const found = products.find(product => product.id === Number(productId));
  const [isLoading, setLoading] = useState(true);
  const [idUnique, setIdUnique] = useState(true);
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
      .then(json => {
        setProducts(json || []);
        setLoading(false);
      });
  }, [url]);

  const editProduct = () => {
    const newProduct = {
      "id": Number(idRef.current.value),
      "title": titleRef.current.value, 
      "price": Number(priceRef.current.value), 
      "category": categoryRef.current.value, 
      "image": imageRef.current.value,
      "rating": {
        "rate": found.rating?.rate,
        "count": found.rating?.count
      },
      "description": descriptionRef.current.value,
      "active": activeRef.current.checked
    };
    const index = products.indexOf(found);
    // productsFromFile.push(newProduct);
    products[index] = newProduct;
    fetch(url, {"method": "PUT", "body": JSON.stringify(products)})
      .then(() => navigate("/admin/maintain-products"));
  }

  const checkIdUniqueness = () => {
    if (idRef.current.value === productId) {
      setIdUnique(true);
      return;
    }
    // MaintainProducts.jsx --> searchFromProducts
    // const result = products.filter(product => product.id === Number(idRef.current.value));
    // if (result.length === 0) {
    const result = products.find(product => product.id === Number(idRef.current.value));
    if (result === undefined) {
      setIdUnique(true);
    } else {
      setIdUnique(false);
    }
  }

  if (isLoading) {
    return <Spinner />
  }

  if (found === undefined) {
    return <NotFound />
  }

  return (
    <div>
      {idUnique === false && <div>Inserted ID is not unique</div>}
      <label>Product ID</label><br />
      <input onChange={checkIdUniqueness} ref={idRef} type="text" defaultValue={found.id} /><br />
      <label>Product image</label><br />
      <input ref={imageRef} type="text" defaultValue={found.image} /><br />
      <label>Product title</label><br />
      <input ref={titleRef} type="text" defaultValue={found.title} /><br />
      <label>Product price</label><br />
      <input ref={priceRef} type="number" defaultValue={found.price} /><br />
      <label>Product category</label><br />
      {/* <input ref={categoryRef} type="text" defaultValue={found.category} /><br /> */}
      <select ref={categoryRef} defaultValue={found.category}>
        {categories.map(category => <option key={category.name}>{category.name}</option>)}
      </select> <br />
      <label>Product description</label><br />
      <input ref={descriptionRef} type="text" defaultValue={found.description} /><br />
      <label>Product active</label><br />
      <input ref={activeRef} type="checkbox" defaultChecked={found.active} /><br />
      <button disabled={idUnique === false} onClick={editProduct}>Edit</button><br />
    </div>
  )
}

export default EditProduct