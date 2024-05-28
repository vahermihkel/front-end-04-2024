import React, { useEffect, useRef, useState } from 'react'
import { Spinner } from 'react-bootstrap';

function MaintainCategories() {
  const [categories, setCategories] = useState([]);
  const categoryRef = useRef();
  const url = process.env.REACT_APP_CATEGORIES_DB_URL;
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(json => {
        setCategories(json || []);
        setLoading(false);
      });
  }, [url]);

  const add = () => {
    const newCategory = {"name": categoryRef.current.value.toLowerCase()};
    categories.push(newCategory);
    fetch(url, {"method": "PUT", "body": JSON.stringify(categories)});
    setCategories(categories.slice());
    // toast?
    categoryRef.current.value = "";
  }

  const remove = (index) => {
    categories.splice(index,1);
    setCategories(categories.slice());
    fetch(url, {"method": "PUT", "body": JSON.stringify(categories)});
  }

  if (isLoading) {
    return <Spinner />
  }

  return (
    <div>
      <label>Kategooria</label> <br />
      <input ref={categoryRef} type="text" /> <br />
      <button onClick={add}>Sisesta</button> <br />
      <hr />
      {categories.map((category, index) => 
        <div key={category.name}>
          {category.name}
          <button onClick={() => remove(index)}>x</button>
        </div>)}
    </div>
  )
}

export default MaintainCategories