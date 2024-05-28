import { Button } from '@mui/material';
import React from 'react'

function SortButtons(props) {
  function sortAZ() {
    props.products.sort((a, b) => a.title.localeCompare(b.title));
    props.setProducts(props.products.slice());
  }
 
  function sortZA() {
    props.products.sort((a, b) => b.title.localeCompare(a.title));
    props.setProducts(props.products.slice());
  }
 
  function sortPriceAsc() {
    props.products.sort((a, b) => a.price - b.price);
    props.setProducts(props.products.slice());
  }
 
  function sortPriceDesc() {
    props.products.sort((a, b) => b.price - a.price);
    props.setProducts(props.products.slice());
  }

  return (
    <div>
      <Button onClick={sortAZ}>Sort A-Z</Button>
      <Button onClick={sortZA}>Sort Z-A</Button>
      <Button onClick={sortPriceAsc}>Sort Price asc</Button>
      <Button onClick={sortPriceDesc}>Sort Price desc</Button>
    </div>
  )
}

export default SortButtons